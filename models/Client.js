const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const clientSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  Franchise_company: {
    type: String,
    trim: true,
    required: true,
  },
  First_name: {
    type: String,
    trim: true,
    required: true,
  },
  Surname: {
    type: String,
    trim: true,
    required: true,
  },
  Contact_No: {
    type: Number,
    trim: true,
    required: true,
  },
  Email: {
    type: String,
    trim: true,
    required: true,
  },
  Address: {
    type: String,
    trim: true,
    required: true,
  },
  Gender: {
    type: String,
    trim: true,
    required: true,
  },
  Age: {
    type: Number,
    trim: true,
    required: true,
  },
  Marital_Status: {
    type: String,
    trim: true,
    required: true,
  },
  Height: {
    type: Number,
    trim: true,
    required: true,
  },
  Weight: {
    type: Number,
    trim: true,
    required: true,
  },
  Vegetarian: {
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
