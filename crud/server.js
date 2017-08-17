var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var employeeController = require('./app/Controller/EmployeeController');
mongoose.connect('mongodb://localhost:27017/GPS');
mongoose.connection.once('connected', function() {
	console.log("Connected to database");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
     // load our public/index.html file
    res.sendfile('./dist/index.html');
});
var router = express.Router();
var port = process.env.PORT || 3000;       

app.use('/api', router);
router.route('/employee')
    .post(employeeController.EmployeePost)
    .get(employeeController.getEmployee)
    .put(employeeController.putEmployee);
router.route('/employee/:id')   
    .delete(employeeController.deleteEmployee)
    .get(employeeController.getEmployeeById);
app.listen(port);
