import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'task_manager'
app.config["MONGO_URI"] = 'mongodb+srv://ableskewer:dAnse*=>1337@cluster0.dmh5q.mongodb.net/third_milestone?retryWrites=true&w=majority'

mongo = PyMongo(app)


@app.route("/")
@app.route("/home")
def index():
    return render_template("index.html", listings=mongo.db.free_listings.find())


@app.route("/post_items")
def post_items():
    return render_template("post_items.html")


if __name__ == "__main__":
    app.run(host=os.getenv("IP"), port=int(os.getenv("PORT")), debug=True)
