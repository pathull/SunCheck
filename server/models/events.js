const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  check: {
    type: Number,
    trim: true
  },
  activity: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    default: new Date().toISOString()
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
