const express= require("express");
const socket = require("socket.io");

const env = require("dotenv").config();

const app = express()
const port = process.env.PORT || 5000;

const server = app.listen(port,()=>{
    console.log(`welcome to the server ${port}`)
})

app.use(express.static('public'))
const so = socket(server);

so.on("connection",(socket)=>{
    console.log(socket)
})