const getAllProducts = async(req,res) =>{
    res.status(200).json({ msg: "i am getAllProducts"});
}
const getAllProductsTesting = async(req,res) =>{
res.status(200).json({ msg: "i am getAllProductsTesting"});
}


module.exports = {getAllProducts,getAllProductsTesting};