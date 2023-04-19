from sqlalchemy import create_engine
from flask import Flask, render_template, jsonify

from config import username, password, hostname, port, db
import pandas as pd

app = Flask(__name__)

# Connect to database
engine = create_engine(f'postgresql+psycopg2://{username}:{password}@{hostname}:{port}/{db}')

# API route set up
@app.route("/api/v1.0/happiness_weather")
def happiness_weather():
    conn = engine.connect()
    query = "SELECT * FROM happiness_weather"
    df = pd.read_sql(query, conn)
    return df.to_json(orient="records")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/happiness")
def happiness():
    return render_template("happiness.html")

@app.route("/bubble")
def weather():
    return render_template("bubble.html")

if __name__ == "__main__":
    app.run(debug=True)
