const express = require("express");
const router =  express.Router();
console.log(__dirname);

const { getAllProducts , getAllProductsTesting } = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;

