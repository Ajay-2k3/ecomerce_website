// my-app/app/api/product/route.js

import { MongoClient } from 'mongodb';

const mongoUri = 'mongodb://localhost:27017';
const dbName = 'shopZZ'; // Replace with your database name
const collectionName = 'products';

export const GET = async (req) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const products = await collection.find({}).toArray();

    return new Response(JSON.stringify(products), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Error fetching data' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  } finally {
    await client.close();
  }
};

export const POST = async (req) => {
  return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 405,
  });
};
