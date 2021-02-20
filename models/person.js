const mongoose = require("mongoose");

//schema for Person Database
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
    required: true,
  },

  address: {
    type: String,
    required: false,
    default: "Address",
  },

  profession: {
    type: String,
    required: true,
    default: "Engineer",
  },

  married: {
    type: Boolean,
    required: false,
    default: false,
  },

  languages: {
    type: Array,
    required: true,
    default: ["English", "Hindi"],
  },

  image: {
    type: String,
    required: false,
    default: "https://picsum.photos/seed/picsum/200/300",
  },

  about: {
    type: String,
    required: false,
    default: "About",
  },
});

module.exports = mongoose.model("Person", personSchema);
