const productModel = require("../models/Product.model");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
    cloud_name: process.env.Cloude_Name,
    api_key: process.env.Cloude_Api,
    api_secret: process.env.Cloude_Secret,
});

const fetchAllProduct = (req, res) => {
    productModel.find().then((product) => {
        console.log(product);
    });
};

const createProduct = (req, res) => {
    console.log(req.body);
    let form = new productModel(req.body);
    form
        .save()
        .then(() => {
            console.log("Product saved");
            res.send({ status: true, message: "data saved successfully" });
        })
        .catch((err) => {
            console.log("Product not saved", err);
            res.send({ status: false, message: "data did not save " });
        });
};
const uploadImage = (req, res) => {
    let media = (req.body. media);
    cloudinary.uploader.upload(media ,(error, result)=>{
        let mediaUrl = result.secure_url;
        res.send({mediaUrl})
        
    } )
};

module.exports = {
    fetchAllProduct,
    createProduct,
    uploadImage,
};
