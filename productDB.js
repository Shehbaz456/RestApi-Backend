require("dotenv").config();
const Product_model = require("./models/Products_schema");
const connectDB = require("./db/connect");

const ProductsJson = require("./products.json")


const start = async() =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product_model.create(ProductsJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}



start();

