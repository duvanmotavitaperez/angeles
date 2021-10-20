from flask import Flask, render_template, url_for, send_from_directory, request
import os

user = 'angeles'
password = 'Sudomkdir5914'

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('admin.html')

@app.route('/main', methods=['POST', 'GET'])
def angeles():
    if request.method == 'GET':
       return render_template('admin.html')
    else:
        if user == request.form['user']:
            return render_template('angeles.html')
        return render_template('admin.html')
app.run(debug=True, host='192.168.10.189')