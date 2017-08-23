'use strict';


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    Required: 'enter the name'
  },
  Address: {
    type: String,
    Required: 'enter the name address'
  },
  Phone: {
    type: Number,
    Required: 'enter the Phone.No'
  
  },
   Designation: {
    type: String,
    Required: 'enter the Designation'
  },
 DateOfBirth: {
    type: Date,
    Required: 'enter the D.O.B'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
 
});


module.exports = mongoose.model('Employees', EmployeeSchema);