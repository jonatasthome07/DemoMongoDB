const conn = require("../db/conn")
const {ObjectId} = require("mongodb")

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

   //Métodos estáticos (sem necessidade de instanciar o objeto) para resgatar, excluir e editar dados
    static async getProducts(){
        const products = await conn.db().collection("products").find().toArray()
        return products
    }

    static async getProductById(id) {
        const product = await conn.db().collection("products").findOne({_id: new ObjectId(id)})
        return product
    }

    static async removeProductById(id){
        await conn.db().collection("products").deleteOne({_id: new ObjectId(id)})
        return
    }

    async updateProduct(id){
        await conn.db().collection("products").updateOne({_id: new ObjectId(id)}, {$set: this})
        return 

}
}

module.exports = Product