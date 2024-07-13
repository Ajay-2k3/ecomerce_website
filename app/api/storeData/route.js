// my-app/app/api/storeData/route.js

import { MongoClient } from 'mongodb';

const mongoUri = 'mongodb://localhost:27017';
const dbName = 'yourDatabaseName'; // Replace with your database name
const collectionName = 'storedData';

export async function postHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Read JSON data from request body
        const inputData = req.body;

        // Insert the JSON data into MongoDB
        const result = await collection.insertOne(inputData);
        console.log('Data inserted:', result.ops);

        res.status(200).json({ message: 'Data stored successfully', data: result.ops });
    } catch (error) {
        console.error('Error storing data:', error);
        res.status(500).json({ error: 'Error storing data', message: error.message });
    } finally {
        await client.close();
        console.log('MongoDB connection closed');
    }
}
