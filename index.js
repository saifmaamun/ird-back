import express, { json } from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ogqtm.mongodb.net/ird?retryWrites=true&w=majority&appName=Cluster0`;
let client;

async function connectToDatabase() {
    if (!client) {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
    }
    return client.db("ird");
}

app.get('/', (req, res) => {
    console.log('Ird Foundation')
    res.send('Welcome IRD Foundation')
})

app.get('/api/categories', async (req, res) => {
    try {
        const database = await connectToDatabase();
        const duasCollaction = database.collection("duasCollaction");
        const cursor = duasCollaction.find({});
        const categories = await cursor.toArray();
        res.send(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).send('Internal Server Error');
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
}

export default app;

