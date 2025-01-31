const express = require('express');
const { MongoClient , ObjectId } = require('mongodb');

const app = express();
app.use(express.json());

const uri = "mongodb+srv://shivamsinghnegi2006:1234@cluster0.6teit.mongodb.net/";
const client = new MongoClient(uri);
const dbName = "Kofi_Hub";

client.connect().then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});
const db = client.db(dbName);

const contactcollection = db.collection("contact-form");
const coffeebeanscollection = db.collection("CoffeeBeans");


//---------------------------  CONTACT FORM --------------------------------


//--------------------------- Post Contact Form--------------------------------
app.post('/contact', async (req, res) => {
  try {
    const { name, email, phonenumber, message } = req.body;
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

//---------------------------Get all the Contacts Info--------------------------------
app.get('/contact', async (req, res) => {
  try {
    const AllContacts = await contactcollection.find().toArray();
    res.status(200).json(AllContacts);
  } catch (err) {
    res.status(500).send("Error fetching support requests: " + err.message);
  }
});

//---------------------------Delete a Contact  --------------------------------

app.delete('/contact/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const result = await contactcollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



//--------------------------------  COFFEE BEANS --------------------------------


//---------------------------Get all the Coffee Beans--------------------------------
app.get('/coffee-beans', async (req, res) => {
  try {
    const allBeans = await coffeebeanscollection.find().toArray();
    res.status(200).json(allBeans);
  } catch (err) {
    res.status(500).send("Error fetching coffee beans data: " + err.message);
  }
});

//---------------- Get Coffee Bean by ID ----------------
app.get('/coffee-beans/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const bean = await coffeebeanscollection.findOne({ _id: new ObjectId(id) });
    if (!bean) return res.status(404).json({ message: "Coffee bean not found" });
    
    res.status(200).json(bean);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//--------------------------- POST route to add a new coffee bean--------------------------------
app.post('/coffee-beans', async (req, res) => {
  try {
    const { name, origin, price, description, image } = req.body;
    if (!name || !origin || !price || !description || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newCoffeeBean = {
      name,
      origin,
      price,
      description,
      image,
    };

    await coffeebeanscollection.insertOne(newCoffeeBean);
    res.status(201).json(newCoffeeBean);
  } catch (error) {
    res.status(500).json({ message: 'Error adding coffee bean', error });
  }
});

//---------------------------Put request for coffee beans data--------------------------------

app.put('/coffee-beans/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const { name, origin, price, description, image } = req.body;
    if (!name || !origin || !price || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedBean = {
      name,
      origin,
      price,
      description,
      image,
    };

    const result = await coffeebeanscollection.replaceOne({ _id: new ObjectId(id) }, updatedBean);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Coffee bean not found" });
    }

    res.status(200).json({ message: "Coffee bean replaced successfully", updatedBean });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//---------------------------Patch request for coffee beans data--------------------------------

app.patch('/coffee-beans/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const updateFields = req.body;
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: "At least one field is required to update" });
    }

    const result = await coffeebeanscollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateFields }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Coffee bean not found" });
    }

    res.status(200).json({ message: "Coffee bean updated successfully", updateFields });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//---------------------------Delete a Coffee--------------------------------

app.delete('/coffee-beans/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const result = await coffeebeanscollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Coffee bean not found" });
    }

    res.status(200).json({ message: "Coffee bean deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});










const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Handle graceful shutdown
process.on('SIGINT', async () => {
  await client.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});