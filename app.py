from flask import Flask, render_template, url_for, send_from_directory, request, make_response
import os
import socket

user = 'angeles'
password = 'Sudomkdir5914'

app = Flask(__name__)

@app.route('/')
def main():
    cof_log = request.cookies.get('login', 'tolo')
    print(cof_log)
    return render_template('admin.html')

@app.route('/main', methods=['POST', 'GET'])
def angeles():
    if request.method == 'GET':
        sess= make_response(render_template('admin.html'))
        sess.set_cookie('login', )
        sess.set_cookie('sesskey', )
        return sess
    else:
        if user == request.form['user']:
            return render_template('angeles.html')
        return render_template('admin.html')

@app.errorhandler(404)
def error404(e):
    return render_template('404.html')

app.run(debug=True, host=f'{socket.gethostname()}')