from flask import Flask, render_template, redirect, url_for, jsonify
from flask import request
app = Flask(__name__)

@app.route('/')
def main():
    return render_template('mapbox.html')



if __name__ == '__main__':
    app.run()
