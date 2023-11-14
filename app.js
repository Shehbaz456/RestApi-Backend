require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

app.get("/",(req,res)=>{
    res.send(`hello brother`);
});


// set middleware or set router
app.use("/api/products",products_routes);

const start = async () =>{
    await connectDB(process.env.MONGODB_URL);
    try {
        app.listen(PORT,()=>{
        console.log(`successfully connected Active port ${PORT}`);
        })
    } catch (error) { 
        console.log(error);
    }
}


start();