const conn = require("../db/conn")

class Product {
    constructor(name, price, description){
        this.name = name
        this.price = price
        this.description = description
    }

    //Método para inserir dados na collection
    save(){
        const product = conn.db().collection("products").insertOne({
            name: this.name,
            price: this.price,
            description: this.description
        })
        return product
    }

   //Método estático (sem necessidade de instanciar o objeto) para resgatar dados
    static getProducts(){
        const products = conn.db().collection("products").find().toArray()
        return products
    }
}

module.exports = Product