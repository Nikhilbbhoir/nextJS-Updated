import mongoose from "mongoose"

const productModel = new mongoose.Schema({
    name:String,
    category:String,
    company:String,
    color:String,
    price:String
});

export const Product = mongoose.models.products || mongoose.model("products",productModel);
