const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const clientSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  franchise_company: {
    type: String,
    trim: true,
    required: true,
  },
  first_name: {
    type: String,
    trim: true,
    required: true,
  },
  surname: {
    type: String,
    trim: true,
    required: true,
  },
  contact_no: {
    type: Number,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    trim: true,
    required: true,
  },
  marital_status: {
    type: String,
    trim: true,
    required: true,
  },
  height: {
    type: Number,
    trim: true,
    required: true,
  },
  weight: {
    type: Number,
    trim: true,
    required: true,
  },
  vegetarian: {
    type: String,
    trim: true,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Client", clientSchema);
