from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = [{
        "id": 1,
        "text": "Doctors Appointment",
        "day": "May 5th at 2:30pm",
        "reminder": True
        },
        {
        "id": 2,
        "text": "Meeting at School",
        "day": "May 6th at 1:30pm",
        "reminder": True
        },
        {
        "id": 3,
        "text": "Food Shopping",
        "day": "May 7th at 12:30pm",
        "reminder": False
        }]

@app.route('/api/', methods=['GET'])
def get_data():
    return jsonify(data)

@app.route('/api/<int:id>', methods=['DELETE'])
def delete_data(id):
    for i in range(len(data)):
        if data[i]['id'] == id:
            del data[i]
            return jsonify(data)

if __name__ == '__main__':
    app.run()
