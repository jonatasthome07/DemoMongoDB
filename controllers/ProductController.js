const Product = require("../models/Product")
module.exports = class ProductController {
    
     static createProducts(req,res){
        res.render("products/create")
    }

    static async createProductsPost(req,res){
        try {
           const {name, price, description} = req.body
           const product = new Product({name, price, description})
           await product.save()
           res.redirect("/products")
        } catch (error) {
            console.log(error)
        }
    }
    
    static async showProducts(req,res){
        const products = await Product.find().lean()
        res.render("products/all", {products})
    }

   static async getProduct(req,res){
       try {
        const id = req.params.id
        const product = await Product.findById(id).lean()
        res.render("products/product", {product})
       } catch (error) {
        console.log(error)
       }

    }

    static async removeProduct(req,res){
        try {
        const id = req.params.id
        await Product.findByIdAndDelete({_id:id})
        res.redirect("/products")
        } catch (error) {
           console.log(error) 
        }
    }

    static async editProduct(req,res){
        const id = req.params.id
        const product = await Product.findById(id).lean()
        res.render("products/edit", {product})
    }

    static async editProductPost(req,res){
        const {id, name,price,description} = req.body
        const product = {name, price, description}
        await Product.updateOne({_id:id}, product)
        res.redirect("/products")
    }
}