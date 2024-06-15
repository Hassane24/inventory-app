const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  synopsis: { type: String, required: true, maxLength: 1000 },
  category: { type: Schema.Types.ObjectId, ref: "Category", require: true },
  rating: { type: Number, required: true, min: 0, max: 10 },
  price: { type: Number, required: true },
  release_date: { type: String, required: true },
});

GameSchema.virtual("url").get(function () {
  return `/games/${this._id}`;
});

module.exports = mongoose.model("Game", GameSchema);
