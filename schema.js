let mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  userID: {
    type: Number,
    required: true
  },
  note: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model("Note", noteSchema);
