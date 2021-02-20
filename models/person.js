const mongoose = require('mongoose')

//schema for Person Database
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  dob: {
    type: Date,
    required: true
  },

  address: {
    type: String,
    required: false
  },

  profession: {
    type: String,
    required: true
  },

  married: {
    type: Boolean,
    required: false,
    default: false
  },

  languages: {
    type: Array,
    required: true
  },

  image: {
    type: String,
    required: false
  },

  about: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Person', personSchema)
