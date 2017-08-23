'use strict';

const mongoose = require('mongoose'),
  Employee = mongoose.model('Employees');



exports.create_a_employee = function(req, res) {
  const new_employee = new Employee(req.body);
  new_employee.save(function(err, employee) {
    if (err)
      res.send(err);
    res.send(employee);
    res.json(employee);
  });
};

exports.list_all_employee = function(req, res) {
  Employee.find({}, function(err, employee) {
    if (err)
      res.send(err);
    res.send(employee);
    res.json(employee);  
  });
};

exports.read_a_employee = function(req, res) {
  Employee.findById(req.params.employeeId, function(err, employee) {
    if (err)
      res.send(err);
    res.send(employee);
    res.json(employee);
  });
};

exports.update_a_employee = function(req, res) {
  Employee.findOneAndUpdate({_id:req.params.employeeId}, req.body, {new: true}, function(err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};
// employee.remove({}).exec(function(){});
exports.delete_a_employee = function(req, res) {

  Employee.remove({
    _id: req.params.employeeId
  }, function(err, employee) {
    if (err)
      res.send(err);
    res.json({ message: 'Employee successfully deleted' });
  });
};