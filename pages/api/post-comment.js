// Import Dependencies
const url = require('url')
const MongoClient = require('mongodb').MongoClient
import { nanoid } from 'nanoid';
// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1))

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  /*let comment = req.body;
  comment = JSON.parse(comment);
  if (!comment) return res.status(400).send('You must write something');
  console.log(comment);*/
  const {name,email,message,uid} = req.body;
  if (!name || !email || !message) {
    res.status(400).send('Missing field(s)');
    return;
  }

  const db = await connectToDatabase(process.env.MONGODB_URI)

  // Select the "comments" collection from the database
  const collection = await db.collection('comments')
  var data = {"_id":nanoid(),"commentedOn": new Date(),name,email,message,uid};
  //var data = {comment};

  const comments = await collection.insertOne(data);

  // Respond with a JSON string of all comments in the collection
  res.status(200).json({ comments })
}
