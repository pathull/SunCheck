const controller = require('./controller/events')
const express = require('express')
const router = express.Router()

router.get("/", controller.getAllEvents);
router.post("/", controller.postOne);
router.post("/register", controller.postRegister);


module.exports = router