
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Khisha! Welcome to Flask."

@app.route("/about/")
def about():
    return "This is the about section."

if __name__ == "__main__":
    app.run(debug=True)