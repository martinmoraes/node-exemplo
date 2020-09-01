
const MongoClient = require('mongodb').MongoClient;





const result = async () => {


    const uri = "mongodb+srv://aula25:dxEdYJD8sJSGxyIt@cluster0.kngwq.mongodb.net/data3?retryWrites=true&w=majority";
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect()
    const db = client.db("data3")

    const cursor = await db.collection('inventory').find({item: 'tttt'})
    cursor.forEach(element => console.log(element))
    // console.log(cursor)


    // await db.collection('inventory').insertOne({
    //     item: 'tttt',
    //     qty: 344,
    //     tags: ['cotton'],
    //     size: { h: 28, w: 35.5, uom: 'cm' },
    //     qwqwqw: 'qwwqwqwqwq'
    // })

    client.close();
}

result()


