const Event = require("../models/events");

exports.getAllEvents = async (req, res) => {
  try {
    let allEvents = await Event.find({})
    res.status(201);
    res.send(allEvents);
  } catch (error) {
    res.sendStatus(400);
  }
};

exports.postOne = async (req, res) => {
  try {
    const newEvent = new Event({
      check: req.body.check,
      // date: req.body.date,
    });
    console.log({ newEvent })
    await newEvent.save();
    res.status(201);
    res.send(newEvent);

  } catch (error) {
    res.sendStatus(400);
  }
};