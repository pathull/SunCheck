const Event = require("../models/events");
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_Secret = 'hello54321hello'

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

exports.postRegister = async (req, res) => {
  const { firstname, lastname, email, password } = req.body

  const encrypt = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email })
    if (oldUser) {
      return res.send({ error: 'User Exists' })
    }
    await User.create({
      firstname,
      lastname,
      email,
      password: encrypt,
    })
    res.status(201)
  } catch (error) {
    res.sendStatus(400);
  }

  exports.postLogIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
      return res.json({ error: 'User Not Found' })

    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({}, JWT_SECRET);

      if (res.status(201)) {
        return res.json({ status: '201', data: token })
      } else {
        return res.json({ error: 'error' })
      }
    }
    res.json({ status: 'error', error: 'Invalid Password' })
  }


}