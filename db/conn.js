const {MongoClient} = require('mongodb')

const uri = "mongodb://localhost:27017/demomongodb"

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