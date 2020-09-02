const { Connection } = require('./Connection')


class OperatorsDB extends Connection {


    async save(collection, data) {
        try {
            const { client, db } = await this.getClienteMongoDB()
            console.log('db', db, 'client', client)
            await db.collection(collection).insertOne(data)
            client.close()
            return data
        } catch (error) {
            console.log('Operators.save', error)
        }
    }

    async find(collection, query) {
        try {
            const { client, db } = this.getClienteMongoDB()
            const cursor = await db.collection(collection).find(query)
            client.close()
            return cursor
        } catch (error) {
            console.log('Operators.find', error)
        }
    }
}

module.exports = { OperatorsDB }