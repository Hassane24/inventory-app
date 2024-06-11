const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  synopsis: { type: String, required: true, maxLength: 1000 },
  genre: { type: Schema.Types.ObjectId, ref: "Genre", require: true },
  rating: { type: Number, required: true, min: 0, max: 10 },
});
