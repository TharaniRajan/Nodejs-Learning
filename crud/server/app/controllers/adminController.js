'use strict';

const mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  Admin = mongoose.model('Admin');

exports.register = function(req, res) {
  const newAdmin = new Admin(req.body);
  newAdmin.hash_password = bcrypt.hashSync(req.body.password, 10);
  newAdmin.save(function(err, admin) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      admin.hash_password = undefined;
      return res.json(admin);
    }
  });
};

exports.sign_in = function(req, res) {
  Admin.findOne({
    email: req.body.email
  }, function(err, admin) {
    if (err) throw err;
    if (!admin || !admin.comparePassword(req.body.password)) {
      return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
    }
    return res.json({ token: jwt.sign({ email: admin.email, fullName: admin.fullName, _id: admin._id }, 'RESTFULAPIs') });
  });
};

exports.loginRequired = function(req, res, next) {
  if (req.admin) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};
