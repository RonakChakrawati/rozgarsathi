from flask import Flask, jsonify, request , render_template
from flask_cors import CORS
from data import all_data

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/search', methods=['POST'])
def search():
    print(" ")
    print("REQUEST RECEIVED")
    category = request.json.get('category')
    skill = request.json.get('skill')
    location = request.json.get('location')
    print(category)
    print(skill)
    print(location)

    if not category or not skill or not location:
        return jsonify({'error': 'Missing required fields'}), 400

    return jsonify(all_data.get(category, all_data["other"]))


if __name__ == '__main__':
    app.run(debug=True)
