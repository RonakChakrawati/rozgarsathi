from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return ' Backend is running!'

@app.route('/search', methods=['POST'])
def search():

    category = request.json.get('category')
    skill = request.json.get('skill')
    location = request.json.get('location')

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
