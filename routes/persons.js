const express = require("express"); //Express framework
const router = express.Router(); //Create Route
const Person = require("../models/person"); //Person Model

router.get("/", async (req, res) => {
  try {
    console.log("Successful GET Request");
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    console.error(err);
    res.send("error:", err);
  }
});

module.exports = router;
