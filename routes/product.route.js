const express = require("express");
const productModel = require("../models/Product.model");
const { fetchAllProduct, createProduct,uploadImage } = require("../controllers/product.controllers");
const router = express.Router();



router.get("/allproduct", fetchAllProduct)


// receive
router.post("/createProduct", createProduct )
router.post("/uploadImage", uploadImage)



// router.delete('/deleteProduct', (req,res)=>{
//     productModel.deleteOne()
//     .then ((product)=>{
//         (console.log(product)
//         )
//     })
// })



module.exports =router