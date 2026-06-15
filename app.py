from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from data import all_data
from google import genai
from dotenv import load_dotenv
import os

load_dotenv()
client = genai.Client(api_key=os.getenv('GEMINI_API_KEY'))

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/list-models')
def list_models():
    models = client.models.list()
    return jsonify({"models": [m.name for m in models]})

@app.route('/test-gemini')
def test_gemini():
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents='''Generate a 3-step skill roadmap for an electrician worker in Surat, India.
Return ONLY a JSON array, no extra text, no markdown, no backticks.
Format:
[
  {"step": "step title in Hindi", "desc": "description in Hindi"},
  {"step": "step title in Hindi", "desc": "description in Hindi"},
  {"step": "step title in Hindi", "desc": "description in Hindi"}
]'''
        )
        import json
        roadmap = json.loads(response.text or "[]")
        print(type(roadmap))
        print(roadmap)
        return jsonify({"response": response.text})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/skills/<category>')
def get_skills(category):
    jobs = all_data[category]["jobs"]
    skills = []
    for job in jobs:
        skills.append(job["title"])
        
    return jsonify(skills)

@app.route('/search', methods=['POST'])
def search():
    category = request.json.get('category')
    skill = request.json.get('skill')
    location = request.json.get('location')

    if not category or not skill or not location:
        return jsonify({'error': 'Missing required fields'}), 400

    base_data = all_data.get(category, all_data["other"])

    try:
        prompt = f'''Generate a 3-step skill roadmap for a {skill} worker in {location}, India.
Return ONLY a JSON array, no extra text, no markdown, no backticks.
Format:
[
  {{"step": "step title in Hindi", "desc": "description in Hindi"}},
  {{"step": "step title in Hindi", "desc": "description in Hindi"}},
  {{"step": "step title in Hindi", "desc": "description in Hindi"}}
]'''

        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt
        )

        import json
        ai_roadmap = json.loads(response.text or "[]")

    except Exception as e:
        print(f"Gemini failed: {e}")
        result = base_data.copy()
        ai_roadmap = base_data["roadmap"]

    result = base_data.copy()
    result['roadmap'] = ai_roadmap
    print("FINAL ROADMAP:")
    print(result["roadmap"])
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
