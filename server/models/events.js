const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    default: new Date().toISOString()
  },
  venue: {
    type: String,
    trim: true
  }

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;