from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return ' Backend is running!'

@app.route('/search')
def search():
    skill = request.args.get('skill')
    location = request.args.get('location')
    
    if not skill or not location:
        return jsonify({'error': 'skill and location required'}), 400
    
    return jsonify({
        'skill': skill,
        'location': location,
        'message': f'Searching for {skill} jobs in {location}'
    })

if __name__ == '__main__':
    app.run(debug=True)
