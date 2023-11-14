const mongoose = require("mongoose");

uri = "mongodb+srv://Shehbaz:shehbazadmin@cluster0.i0xltzv.mongodb.net/cluster0?retryWrites=true&w=majority"


const connectDB = (uri) =>{
    console.log("========== connect DB OK ========== ");
    return mongoose.connect(uri)
} 


// const connectDB = () =>{
//     console.log("========== connect DB OK ========== ");
//     return mongoose.connect(uri,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
// } 

module.exports = connectDB;