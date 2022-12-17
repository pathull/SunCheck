const Event = require('../models/events');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'hello54321hello';

exports.getAllEvents = async (req, res) => {
  try {
    let allEvents = await (await Event.find({}).sort({ date: 'desc' })).reverse();
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
      date: req.body.date,
      activity: req.body.activity
    });
    console.log({ newEvent });
    await newEvent.save();
    res.status(201);
    res.send(newEvent);
  } catch (error) {
    res.sendStatus(400);
  }
};

exports.postRegister = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const encrypt = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: 'User Exists' });
    }
    await User.create({
      firstname,
      lastname,
      email,
      password: encrypt
    });
    res.send({ status: '201' });
  } catch (error) {
    res.send({ status: '400' });
  }
};

exports.postLogIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: 'User Not Found' });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: '201', data: token });
    } else {
      return res.json({ error: 'error' });
    }
  }
  res.json({ status: 'error', error: 'Incorrect Password' });
};

exports.userInfo = async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userEmail = user.email;
    User.findOne({ email: userEmail })
      .then((data) => {
        res.send({ status: '201', data: data });
      })
      .catch((error) => {
        res.send({ status: 'error', data: error });
      });
  } catch (error) {}
};
