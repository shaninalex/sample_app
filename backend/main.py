import random
import time
import json
from flask import Flask, jsonify

app = Flask(__name__)


def random_return_waiting():
    time.sleep(random.uniform(0, 3))


@app.route("/api/v2/register", methods=["POST"])
def register():
    random_return_waiting()
    with open("./datasource/register.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 201


@app.route("/api/v2/login", methods=["POST"])
def login():
    random_return_waiting()
    with open("./datasource/login.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 200


@app.route("/api/v2/user", methods=["GET"])
def user():
    random_return_waiting()
    with open("./datasource/login.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 200


@app.route("/api/v2/pdf-generate", methods=["POST"])
def generate_pdf():
    random_return_waiting()
    with open("./datasource/generate_pdf.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 200


@app.route("/api/v2/alphavantage/overview/aapl", methods=["GET"])
def alphavantage_overview():
    random_return_waiting()
    with open("./datasource/alphavantage_company_overview.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 200


@app.route("/api/v2/alphavantage/earnings-calendar/aapl", methods=["GET"])
def alphavantage_earnings_calendar():
    random_return_waiting()
    with open("./datasource/alphavantage_earnings_calendar.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 200


@app.route("/api/v2/quiverquant/housetrading/aapl", methods=["GET"])
def quiverquant_housetrading():
    random_return_waiting()
    with open("./datasource/quiverquant_housetrading.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 200


@app.route("/api/v2/quiverquant/senatetrading/aapl", methods=["GET"])
def quiverquant_senatetrading():
    random_return_waiting()
    with open("./datasource/quiverquant_senatetrading.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 200


@app.route("/api/v2/quiverquant/twitter/aapl", methods=["GET"])
def quiverquant_twitter():
    random_return_waiting()
    with open("./datasource/quiverquant_twitter.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 200


@app.route("/api/v2/quiverquant/congresstrading/aapl", methods=["GET"])
def quiverquant_congresstrading():
    random_return_waiting()
    with open("./datasource/quiverquant_congresstrading.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 200


@app.route("/api/v2/quiverquant/wallstreetbets/aapl", methods=["GET"])
def quiverquant_wallstreetbets():
    random_return_waiting()
    with open("./datasource/quiverquant_wallstreetbets.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 200


@app.route("/api/v2/gurufocus/summary/aapl", methods=["GET"])
def gurufocus_summary():
    random_return_waiting()
    with open("./datasource/gurufocus_summary.json", 'r') as f:
        data = json.load(f)
        return jsonify(data), 200


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8080)
