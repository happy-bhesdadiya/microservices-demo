const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  address: {
    type: String,
    require: true
  }
})

const Customer = mongoose.model("customer", CustomerSchema);

module.exports = Customer;