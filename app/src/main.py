from flask import Flask
app = Flask(__name__)

import os
from flask import json

import berlioz
berlioz.setupFlask(app)

import time

@app.route('/')
def index_handler():
    return json.dumps({
        'message': 'Hello from APP'
    })

@app.route('/query')
def query_handler():
    time.sleep(0.25)

    result = {
        'message': 'Hello, my name is APP microservice. I have received following payload from BILL microservice.'
    }

    try:
        response  = berlioz.service('bill').request().get('/')
        result['payload'] = response.text
    except Exception as ex:
        result['payload'] = str(ex)

    return json.dumps(result)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')