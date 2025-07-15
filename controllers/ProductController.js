const Product = require("../models/Product")
module.exports = class ProductController {
    
    static async showProducts(req,res){
        const products = await Product.getProducts()
        res.render("products/all", {products})
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

    static async getProduct(req,res){
       try {
        const id = req.params.id
        const product = await Product.getProductById(id)
        res.render("products/product", {product})
       } catch (error) {
        console.log(error)
       }

    }

    static async removeProduct(req,res){
        try {
        const id = req.params.id
        await Product.removeProductById(id)
        res.redirect("/products")
        } catch (error) {
           console.log(error) 
        }
    }

    static async editProduct(req,res){
        const id = req.params.id
        const product = await Product.getProductById(id)
        res.render("products/edit", {product})
    }

    static async editProductPost(req,res){
        const {id, name,price,description} = req.body
        const product = new Product(name, price, description)
        await product.updateProduct(id, {name,price, description})
        res.redirect("/products")
    }
}