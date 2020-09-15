const {MongoClient, ObjectId} = require('mongodb')


class Connection {


    getClienteMongoDB = async () => {

        try {
            const uri = "mongodb+srv://aluno:rzO0f12o45BDyqPs@cluster0.kngwq.mongodb.net/aula?retryWrites=true&w=majority";
            const client = await new MongoClient(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            await client.connect()
            const db = client.db("aula")
            // console.log('Connection{client}',client, '{db}',db)
            return { client, db }
        } catch (error) {
            console.log('Connection.getClienteMongoDB', error)

        }
    }


    getObjectId(stringID){
        try{
            return ObjectId(stringID)
        } catch(fail){
            console.log('Connection.getObjectId', fail)
        }
    }
}

module.exports = { Connection }