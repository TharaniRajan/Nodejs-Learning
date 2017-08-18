var Employee = require('../models/employee');

    exports.EmployeePost = function(req, res){
    var employee = new Employee({
        name:req.body.name,
        address:req.body.address,
        created_by:new Date,
        updated_by:req.body.updated_by,
    });
    employee.save(function(err, data){
        if(err) {
            res.send(err);
        }
        res.send(data);
    });

};

//getall Trackdetails
    exports.getEmployee = function(req, res) {
  Employee.find(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

//update Trackdetails byId
exports.putEmployee = function(req, res) {
  Employee.findOneAndUpdate({ _id: req.body._id },
  {
    $set:
    {
       "_id": req.body._id,
        "name": req.body.name,
        "address": req.body.address,
        "created_by": req.body.created_by,
        "updated_by": req.body.updated_by,
    }  
  }, {upsert: true, new: true}, function (err, data) {
    
    res.send(data);
  });

};

//delete Trackdetails byId
exports.deleteEmployee= function(req, res){
  Employee.findByIdAndRemove(req.params.id,function(err){
    if(err) {
      return res.send(err);
    }
    res.json({message:'Employee removed!'});
  });
};


//get Trackdetails byId
exports.getEmployeeById= function(req, res){
  Employee.findById(req.params.id,function(err, data){
    if(err) {
      return res.send(err);
    }
    res.json(data);
  });
};