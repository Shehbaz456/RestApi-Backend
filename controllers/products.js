const Product = require("../models/Products_schema");

const getAllProducts = async(req,res) =>{


    const {company,name,featured} = req.query;
    
    const queryObject = {};
    if(company){
        queryObject.company = company;
    }

    if(name){
        queryObject.name = { $regex : name , $options:"i" };
    }
    if(featured){
        queryObject.featured =featured;
    }

    console.log(queryObject);

    const mydata =  await Product.find(queryObject);
    res.status(200).json({ mydata });

}
const getAllProductsTesting = async(req,res) =>{
    const mydata =  await Product.find(req.query);
    console.log( req.query );
res.status(200).json({ mydata });
}

module.exports = {getAllProducts,getAllProductsTesting};
