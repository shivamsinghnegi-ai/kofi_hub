const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
const dbName ="Kofi_Hub";

client.connect().then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});
const db = client.db(dbName);
const contactcollection = db.collection("contact-form");
const coffeebeanscollection = db.collection("coffee-beans");

//---------------------------Contact Form--------------------------------
app.post('/contact', async (req, res) => {
    try {
      const { name, email, phonenumber , message } = req.body;
      if (!name || !email || !phonenumber || !message) {
        return res.status(400).json({ message: "All fields are required." });
      }
      const newContact = {
        name,
        email,
        phonenumber,
        message,
        createdAt: new Date(), 
      };
      await contactcollection.insertOne(newContact);

      res.status(201).json({ message: "Contact form submitted successfully!", contact: newContact });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

