const express = require('express');
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express()
const port = process.env.PORT || 5000;

// middleWare
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@cluster0.eko35.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const uri = `mongodb://${process.env.DB_user}:${process.env.DB_pass}@cluster0-shard-00-00.eko35.mongodb.net:27017,cluster0-shard-00-01.eko35.mongodb.net:27017,cluster0-shard-00-02.eko35.mongodb.net:27017/?ssl=true&replicaSet=atlas-js9j9t-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const coffeCollection = client.db('coffeeDB').collection('coffee')
    const userCollection = client.db('coffeeDB').collection('users')

    // data collect from mongoDB
    app.get('/coffee', async (req, res) => {
      const cursor = coffeCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    // create this for helping update purpose. using put method for final update
    app.get('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await coffeCollection.findOne(query)
      res.send(result)
    })

    //data received by req.body and send to mongoDB by res.send//
    app.post('/coffee', async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee)
      const result = await coffeCollection.insertOne(newCoffee)
      res.send(result)
    })

    app.put('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCoffee = req.body;
      const coffee = {
        $set: {
          name: updateCoffee.name,
          quantity: updateCoffee.quantity,
          supplier: updateCoffee.supplier,
          taste: updateCoffee.taste,
          details: updateCoffee.details,
          category: updateCoffee.category,
          photo: updateCoffee.photo,
        }
      }

      const result = await coffeCollection.updateOne(filter, coffee, options)
      res.send(result)
    })

    app.delete('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await coffeCollection.deleteOne(query)
      res.send(result)
    })

    //users realated api"s 
    app.get('/users', async (req, res) => {
      const cursor = userCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.post('/users', async (req, res) => {
      const newUser = req.body;
      console.log('new User: ', newUser)

      const result = await userCollection.insertOne(newUser)
      res.send(result)
    })

    app.patch('/users', async (req, res) => {
      const email = req.body.email;
      const filter = { email }
      const updateDoc = {
        $set: {
          lastSignInTime: req.body?.lastSignInTime
        }
      }
      const result = await userCollection.updateOne(filter, updateDoc)
      res.send(result)
    })
    
    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await userCollection.deleteOne(query)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('coffee server is running')
})

app.listen(port, () => {
  console.log(`port: ${port}`)
})