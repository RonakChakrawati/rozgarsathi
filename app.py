# RozgarSathi Backend Server

# Responsibilities:
# 1. Serve the frontend webpage
# 2. Provide dropdown data (skills/categories)
# 3. Return jobs, schemes and roadmaps
# 4. Generate AI-powered roadmaps using Gemini


# flask - creates web server , jsonify - converts python into json format , request - reads frontend data , render_template - loads html page
from flask import Flask, jsonify, request, render_template  
# Allows frontend/backend communication
from flask_cors import CORS
# our mockup data
from data import all_data
# gemini sdk - send HTTP request,  build headers , authenticate , parse response , handle errors all done auto
from google import genai
# reads .env file
from dotenv import load_dotenv
# os is a built-in Python module - It gives access to things from your operating system.
import os


# reads api key from .env file
load_dotenv()
# Gemini SDK creates a client object 
# Create Gemini client using API key
# This client is used whenever we need AI-generated content
client = genai.Client(api_key=os.getenv('GEMINI_API_KEY'))

# creates our server 
app = Flask(__name__)
# allows browser request - communication between backend and frontend 
CORS(app)

# Home page route
# Loads the main frontend UI - from template folder 
@app.route('/')
def home():
    return render_template("index.html")

# Skills API
# When a user selects a category, the frontend calls this route
# to fetch all available job/skill options for that category.
@app.route('/skills/<category>')
def get_skills(category):

    # Get all jobs belonging to the selected category
    jobs = all_data[category]["jobs"]

    # Store only job titles for dropdown display
    skills = []

    # Extract title from each job object - loop 
    for job in jobs:
        skills.append(job["title"])

    # Return list of skill titles as JSON
    return jsonify(skills)

# Main Search API - Receives the user's selected category, skill and location - Returns -> Relevant jobs , Government schemes , Career roadmap
@app.route('/search', methods=['POST'])
def search():

    # Read user selections sent from the frontend
    category = request.json.get('category')
    skill = request.json.get('skill')
    location = request.json.get('location')

    # Prevent incomplete searches
    # All three fields are required before processing otherwise give error msg
    if not category or not skill or not location:
        return jsonify({'error': 'Missing required fields'}), 400

    # Load jobs, schemes and default roadmap
    # for the selected category from data.py
    base_data = all_data.get(category, all_data["other"])
    try:
        # Create a personalized roadmap prompt for Gemini.
        # User's selected skill and location are injected
        # into the prompt to generate customized results.
        prompt = f'''
Generate a 3-step career growth roadmap for an experienced {skill} worker in {location}, India.
Industry: {category}
Important:
- Assume the worker already works as a {skill}.
- Do NOT suggest beginner skills.
- Do NOT suggest learning basic concepts.
- Focus on higher-paying opportunities, specialization, leadership, certifications, modern tools and career growth.
- Return ONLY a JSON array.
Format:
[
  {{"step":"step title in Hindi","desc":"description in Hindi"}},
  {{"step":"step title in Hindi","desc":"description in Hindi"}},
  {{"step":"step title in Hindi","desc":"description in Hindi"}}
]
'''

        # Send prompt to gemini and receive ai-generated roadmap
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt
        )

        import json
        
        clean_text = (response.text or "").strip()

        if clean_text.startswith("```json"):
            clean_text = clean_text.replace("```json", "")
            clean_text = clean_text.replace("```", "")
            clean_text = clean_text.strip()
        
        # Convert gemini's JSON text response into a python list of roadmap objects
        ai_roadmap = json.loads(clean_text)

    # if gemini unavailable - use mockup data - so application continue working
    except Exception as e:
        result = base_data.copy()   
        ai_roadmap = base_data["roadmap"]

    # Create a copy of category data and replace
    # the default roadmap with the AI-generated roadmap
    result = base_data.copy()
    result['roadmap'] = ai_roadmap

    # send final jobs, schemes and roadmap to frontend
    return jsonify(result)

# Starts the RozgarSathi backend server during development - {off debug in deployment}
if __name__ == '__main__':
    app.run(debug=True)
