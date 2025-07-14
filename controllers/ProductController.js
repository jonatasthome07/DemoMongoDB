const Product = require("../models/Product")
module.exports = class ProductController {
    static showProducts(req,res){
        res.render("products/all")
    }

    static createProducts(req,res){
        res.render("products/create")
    }

    static async createProductsPost(req,res){
        try {
           const {name, price, description} = req.body
           const product = new Product(name, price, description)
           product.save()
           res.redirect("/products")
        } catch (error) {
            console.log(error)
        }
    }
}