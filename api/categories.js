import { MongoClient } from 'mongodb';
import app from '../app';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ogqtm.mongodb.net/ird?retryWrites=true&w=majority&appName=Cluster0`;

let client;

async function connectToDatabase() {
    if (!client) {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
    }
    return client.db("ird");
}

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

export default app;

