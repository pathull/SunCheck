const express = require('express')
const app = express()
const mongoose = require('./mongoose')
const router = require('./router')
const cors = require('cors')
app.use(cors())
app.use(express.json())


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD,OPTION,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
})

app.use(router)
const connect = async () => {
  mongoose
  app.listen(3001)
}
connect();