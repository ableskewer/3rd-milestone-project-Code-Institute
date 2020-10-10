import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'third_milestone'
app.config["MONGO_URI"] = 'mongodb+srv://ableskewer:dAnse*=>1337@cluster0.dmh5q.mongodb.net/third_milestone?retryWrites=true&w=majority'

mongo = PyMongo(app)


@app.route("/")
@app.route("/home")
def index():
    return render_template("index.html", items=mongo.db.free_listings.find())


@app.route("/post_items")
def post_items():
    return render_template("post_items.html")


@app.route('/create_item', methods=['POST'])
def create_item():
    item = mongo.db.free_listings
    item.insert_one(request.form.to_dict())
    return redirect(url_for('index'))


@app.route('/edit_item/<item_id>')
def edit_item(item_id):
    the_item = mongo.db.free_listings.find_one({"_id": ObjectId(item_id)})
    return render_template("edit_items.html", item=the_item)


@app.route('/update_item/<item_id>', methods=["POST"])
def update_item(item_id):
    item = mongo.db.free_listings
    item.update({"_id": ObjectId(item_id)},
                {
                    "first_name": request.form.get("first_name"),
                    "city": request.form.get("cirst"),
                    "adress": request.form.get("adress"),
                    "phone_number": request.form.get("phone_number"),
                    "item_title": request.form.get("item_title"),
                    "item_description": request.form.get("item_description"),
                    "due_date": request.form.get("due_date"),
                    "due_time": request.form.get("due_time"),
                    "item_condition": request.form.get("item_condition"),
    })
    return redirect(url_for("index"))


@app.route("/delete_item/<item_id>")
def delete_item(item_id):
    mongo.db.free_listings.remove({"_id": ObjectId(item_id)})
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(host=os.getenv("IP"), port=int(os.getenv("PORT")), debug=True)
