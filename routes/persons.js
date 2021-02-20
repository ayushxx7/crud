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

router.post("/", async (req, res) => {
  const person = new Person({
    name: req.body.name,
    dob: req.body.dob,
    address: req.body.address,
    profession: req.body.profession,
    married: req.body.married,
    languages: req.body.languages,
    image: req.body.image,
    about: req.body.about,
  });

  try {
    const per = await person.save();
    res.json(per);
    console.log('Successful POST request')
  } catch (err) {
    console.error("Error", err);
    res.send(err);
  }
});

module.exports = router;
