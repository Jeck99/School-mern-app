const mongoose = require('mongoose');

const Student= mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    birthday:{type:Date},
    parentEmail:{type:String,required:true}
}
,{timestemps:true});

module.exports = mongoose.model('Student',Student);