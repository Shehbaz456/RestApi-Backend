const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Prise:{
        type:Number,
        required:[true,"Price must be provided"]
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values : ["Apple","Amazon","Microsoft","Dell","UrbanMonkey","Boat"],
            message: `{VALUE} is not supported`
        }

    }
})


module.exports = mongoose.model("Product",ProductSchema);