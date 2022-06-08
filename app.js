const express = require('express')
const connectDB = require('./app/db/connectdb')
const dbconfig = require('./app/config/db')
const path = require('path')
const app = express()
const port = 3210
var router = express.Router();

app.use(express.json());
connectDB(dbconfig.uri)

require("./app/routes/auth.routes")(app)

app.get('/',(req,res)=>{
    res.json({ message: "Welcome to Category Application." });
})

app.listen(port,()=>{
    console.log(`listen port number:${port}`)
})