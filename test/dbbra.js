const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb+srv://braian-aula:123qwe@cluster0.ve03h.mongodb.net/DatabaseAula?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
// client.connect(err => {
//   const db = client.db("DatabaseAula")
//     // console.log(db);
//     await db.collection('inventory').insertOne(
//         {
//             item: 'canvas',
//             qty: 100,
//             tags: ['cotton'],
//             size: { h: 28, w: 35.5, uom: 'cm' }
//         }
//     );
//     client.close();
// });


const result = async () => {
    const uri = "mongodb+srv://braian-aula:123qwe@cluster0.ve03h.mongodb.net/DatabaseAula?retryWrites=true&w=majority";
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect()
    const db = client.db("DatabaseAula")

    // const cursor = await db.collection('inventory').find({})
    // cursor.forEach(element => console.log(element))
    // consoleg.log(cursor);

    await db.collection('inventory').insertOne(
        {
            item: 'canvas',
            qty: 100,
            tags: ['cotton'],
            size: { h: 28, w: 35.5, uom: 'cm' }
        }
    )
    client.close()
} 

result()