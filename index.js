const express = require("express");
const app = express();
const PORT = 5000
const mongoose = require('mongoose')


app.use(express.urlencoded({extended:true, limit: "100mb"}))

// connect to mongodb
// CRUD - CREATE, READ, UPDATE, DELETE



require("dotenv").config();
const cors = require ("cors")
const URI =  process.env.MONGO_DB_URL
const ProductRouter = require("./routes/product.route")
app.use(cors())
app.use(express.json({limit: "100mb"}))

app.use("/product", ProductRouter)
mongoose.connect(URI)

.then(() => {
    console.log("mongobd yaff connect")
})
.catch((err) => {
    console.log("error connecting to mongodb", err)
})


// app.use("/product",)





// starting saver
app.listen(PORT,(err)=>{
    if (err) {
        console.log("Node no gree start")
    }else {
        console.log("Node is running");
        
    }
})