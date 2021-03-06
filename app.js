const express = require("express"); //Express framework
const mongoose = require("mongoose"); //MongoDB Connection
const cors = require("cors");
const url =
  process.env.MONGODB_URI ||
  "mongodb+srv://ayush:123@persons.frxud.mongodb.net/PersonDB?retryWrites=true&w=majority";
// Node.js will connect to MongoDB, and MongoDB will connect to PersonDB

const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const conn = mongoose.connection; //handle to the connection

conn.on("error", console.error.bind(console, "connection error:"));
conn.once("open", function () {
  console.log("Connected to Server!");
});

app.use(express.json()); //to enable JSON request/response
app.use(cors()); //to allow request from frontend

//different entities should live on different routes
const personRouter = require("./routes/persons.js");
app.use("/persons", personRouter);

//If end point does not exist, return 404
app.use((req, res) => {
  res.status("404").send("Page does not exist");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 9000;
}

app.listen(port, () => {
  console.log("Server Started");
});
