from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return ' Backend is running!'

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

    return jsonify({
        'category': category,
        'skill': skill,
        'location': location,
        'message': f'Received {skill} from {location}'
    })

if __name__ == '__main__':
    app.run(debug=True)
