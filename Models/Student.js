const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String,
    },
    username:{
        required:true,
        type:String,
        unique:true,
    },
    email:{
        required:true,
        type:String,
        unique:true,
    },
    password:{
        required:true,
        type:String,
    }
})
module.exports = mongoose.model('student',studentSchema);