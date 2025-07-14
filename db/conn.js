//Importa apenas o MongoClient do módulo para se conectar ao banco
const {MongoClient} = require('mongodb')

//URI para instanciar uma conexão localmente
const uri = "mongodb://localhost:27017/demomongodb"

//Instanciamos a classe com a URI da conexão
const client = new MongoClient(uri)

async function run() {
    try {
       await client.connect()
       console.log("Conexão realizada!") 
    } catch (error) {
        console.log(error)
    }
}

run()
module.exports = client