const mongoose = require('mongoose');

const schema = mongoose.Schema({

    name:{
        type:Array,
        required:true
    },

    ERNO:{
        type:String,
        required:true,
        minlength:10
    },

    Study:{
        Branch:{
            type:String,
        },
        Sem:{
            type:Number
        }
    },

    Marks:{
        type:Array,
        required:true,
        minlength:1
    },

    City:{
        type:String,
        required:true,
        minlength:3
    },

    Contact:{
        Email:{
            type:String,
        },
        Phnno:{
            type:Number,
        }
    }

},{timestamps:true});

module.exports = mongoose.model("Student",schema);