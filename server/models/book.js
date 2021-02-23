const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model("Book", movieSchema);
