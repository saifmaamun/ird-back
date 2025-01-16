

import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
    console.log('Ird Foundation')
    res.send('Welcome IRD Foundation')
})

export default app;



/*
// import express,{json} from 'express';
// import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv';
// const app = express();
// const port = process.env.PORT || 5000;
// import cors from 'cors';
// // import { ObjectId } from 'mongodb';


// // 
// app.use(cors());
// app.use(json());
// dotenv.config();



// // 
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ogqtm.mongodb.net/ird?retryWrites=true&w=majority&appName=Cluster0`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



// // 
// async function run() {
//     try {
//         await client.connect();
//         const database = client.db("ird");
//         const duasCollaction = database.collection("duasCollaction");
        

//         // GET API
//         app.get('/categories', async (req, res) => {
//             const cursor = duasCollaction.find({});
//             const categories = await cursor.toArray();
//             res.send(categories);
//         })




//     } finally {
//         // await client.close();
//     }
// }
// run().catch(console.dir);




// // 
// app.get('/', (req, res) => {
//     console.log('Ird Foundation')
//     res.send('Welcome IRD Foundation')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })




// // npm install express cors mongodb dotenv
*/