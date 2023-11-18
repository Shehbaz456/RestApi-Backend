const Product = require("../models/Products_schema");

const getAllProducts = async(req,res) =>{
    const mydata =  await Product.find({});
    res.status(200).json({ mydata });

}
const getAllProductsTesting = async(req,res) =>{
res.status(200).json({ msg: "i am getAllProductsTesting"});
}


module.exports = {getAllProducts,getAllProductsTesting};