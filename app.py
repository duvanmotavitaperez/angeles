from flask import Flask, render_template, url_for, send_from_directory
import os

app = Flask(__name__)
path_fonts = os.path.abspath('./fonts/')
@app.route('/')
def main():
    return render_template('angeles.html')

app.run(debug=True, host='192.168.1.8')