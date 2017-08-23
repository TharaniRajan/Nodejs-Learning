'use strict';

const express = require('express'),
 app = express(),
 port = process.env.PORT || 3000,
 mongoose = require('mongoose'),
 Employee = require('./app/models/employeeListModel'),
 Admin = require('./app/models/adminModel'),
 bodyParser = require('body-parser'),
 jsonwebtoken = require("jsonwebtoken");
const database = require('./config/database');      // load the database config

mongoose.Promise = global.Promise;
mongoose.connect(database.localUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});
const routes = require('./app/routes/employeeListRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('express server started on: ' + port);

module.exports = app;