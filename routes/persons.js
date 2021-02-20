const express = require("express"); //Express framework
const router = express.Router(); //Create Route
const Person = require("../models/person"); //Person Model

router.get("/", async (req, res) => {
  try {
    console.log("Successful GET Request");
    const persons = await Person.find();
    res.status("200").json(persons);
  } catch (err) {
    console.error(err);
    res.status("500").send(`error: ${err}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person) {
      console.log("Successful GET Request with id");
      res.status("200").json(person);
    } else {
      res.status("404").send(`ID "${req.params.id}" does not exist`);
    }
  } catch (err) {
    console.error(err);
    res.status("500").send("error:", err);
  }
});

router.post("/", async (req, res) => {
  if (!req.body.name) {
    res.status("400").send("Name is required!");
  }

  if (!req.body.dob) {
    res.status("400").send("Date of Birth is required!");
  }

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
    const per = await person.save(); //create new document with POST data
    res
      .status("201")
      .json({ Person: per, "Quick Acess": `/persons/${per.id}` });
    console.log("Successful POST request");
  } catch (err) {
    console.error("Error", err);
    res.status("500").send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person) {
      if (req.body.profession) {
        person.profession = req.body.profession;
        const per = await person.save(); //sends updateOne operation since document exists
        res.status("201").json(per);
      } else {
        res
          .status("400")
          .send(`Expecting a JSON Body of the format {'profession': '<data>'}`);
      }
    } else {
      res.status("404").send(`ID "${req.params.id}" does not exist`);
    }
  } catch (err) {
    res.status("500").send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person) {
      const per = await person.remove(); //remove document from db
      res.status("204").send();
    } else {
      res.status("404").send(`ID "${req.params.id}" does not exist`);
    }
  } catch (err) {
    res.status("500").send(err);
  }
});

module.exports = router;
