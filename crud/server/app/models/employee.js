var mongoose = require('mongoose');
var employee = new mongoose.Schema({
    //Id:{type:String, require:true},
    name:{type:String, require:true},
    address:{type:String, require:true},
    created_by:{type:Date},
    updated_by:{type:Date}
    
});

module.exports = mongoose.model('Employee', employee);