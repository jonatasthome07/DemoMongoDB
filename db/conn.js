const mongoose = require ("mongoose")

async function main() {
    try {
        await mongoose.connect("mongodb://localhost:27017/demomongoose")
        console.log("Conexão realizada com sucesso!")

    } catch (error) {
        console.log(error)
    }
}

main()
module.exports = main