const express = require("express"); //Express framework
const mongoose = require("mongoose"); //MongoDB Connection
const url = "mongodb://localhost/PersonDB";
// Node.js will connect to MongoDB, and MongoDB will connect to PersonDB

// const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const conn = mongoose.connection; //handle to the connection

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  console.log("Connected to Server!")
});