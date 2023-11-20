require("dotenv").config();
const Products = require("./models/Products_schema");
const connectDB = require("./db/connect");

const ProductsJson = require("./products.json")


const start = async() =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Products.deleteMany();
        await Products.create(ProductsJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}



start();

