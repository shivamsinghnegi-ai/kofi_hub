const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(express.json());

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Single origin for simplicity during testing
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 204, // Ensure preflight returns 204
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

const uri = "mongodb+srv://test:test123@cluster0.cmvmn.mongodb.net/";
const client = new MongoClient(uri);
const dbName = "Kofi_Hub";

const GEMINI_API_KEY = "AIzaSyA0D5ukYKCeKCNNbyfFnNT1nhiRH-_AGSQ";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);

    const contactcollection = db.collection("contact-form");
    const coffeebeanscollection = db.collection("CoffeeBeans");
    const equipmentcollection = db.collection("Equipment");
    const drinkscollection = db.collection("Drinks");
    const chatbotCollection = db.collection("chatbot");
    const reviewsCollection = db.collection("reviews");

    // Contact Form Routes (unchanged)
    app.post('/contact', async (req, res) => {
      try {
        const { name, email, phonenumber, message } = req.body;
        if (!name || !email || !phonenumber || !message) {
          return res.status(400).json({ message: "All fields are required." });
        }
        const newContact = { name, email, phonenumber, message, createdAt: new Date() };
        await contactcollection.insertOne(newContact);
        res.status(201).json({ message: "Contact form submitted successfully!", contact: newContact });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    app.get('/contact', async (req, res) => {
      try {
        const AllContacts = await contactcollection.find().toArray();
        res.status(200).json(AllContacts);
      } catch (err) {
        res.status(500).send("Error fetching support requests: " + err.message);
      }
    });

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

    // Coffee Beans Routes (unchanged)
    app.get('/coffee-beans', async (req, res) => {
      try {
        const allBeans = await coffeebeanscollection.find().toArray();
        res.status(200).json(allBeans);
      } catch (err) {
        res.status(500).send("Error fetching coffee beans data: " + err.message);
      }
    });

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

    app.post('/coffee-beans', async (req, res) => {
      try {
        const { name, origin, price, description, image } = req.body;
        if (!name || !origin || !price || !description || !image) {
          return res.status(400).json({ message: 'All fields are required' });
        }
        const newCoffeeBean = { name, origin, price, description, image };
        await coffeebeanscollection.insertOne(newCoffeeBean);
        res.status(201).json(newCoffeeBean);
      } catch (error) {
        res.status(500).json({ message: 'Error adding coffee bean', error });
      }
    });

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
        const updatedBean = { name, origin, price, description, image };
        const result = await coffeebeanscollection.replaceOne({ _id: new ObjectId(id) }, updatedBean);
        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Coffee bean not found" });
        }
        res.status(200).json({ message: "Coffee bean replaced successfully", updatedBean });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

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

    // Equipment Routes (unchanged)
    app.get('/equipment', async (req, res) => {
      try {
        const allEquipment = await equipmentcollection.find().toArray();
        res.status(200).json(allEquipment);
      } catch (err) {
        res.status(500).send("Error fetching brewing equipment: " + err.message);
      }
    });

    app.get('/equipment/:id', async (req, res) => {
      try {
        const id = req.params.id;
        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ message: "Invalid ID format" });
        }
        const equipment = await equipmentcollection.findOne({ _id: new ObjectId(id) });
        if (!equipment) return res.status(404).json({ message: "Equipment not found" });
        res.status(200).json(equipment);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    app.post('/equipment', async (req, res) => {
      try {
        const { name, type, price, description, image } = req.body;
        if (!name || !type || !price || !description || !image) {
          return res.status(400).json({ message: 'All fields are required' });
        }
        const newEquipment = { name, type, price, description, image, createdAt: new Date() };
        await equipmentcollection.insertOne(newEquipment);
        res.status(201).json(newEquipment);
      } catch (error) {
        res.status(500).json({ message: 'Error adding brewing equipment', error });
      }
    });

    app.put('/equipment/:id', async (req, res) => {
      try {
        const id = req.params.id;
        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ message: "Invalid ID format" });
        }
        const { name, type, price, description, image } = req.body;
        if (!name || !type || !price || !description || !image) {
          return res.status(400).json({ message: "All fields are required" });
        }
        const updatedEquipment = { name, type, price, description, image };
        const result = await equipmentcollection.replaceOne({ _id: new ObjectId(id) }, updatedEquipment);
        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Equipment not found" });
        }
        res.status(200).json({ message: "Equipment replaced successfully", updatedEquipment });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    app.patch('/equipment/:id', async (req, res) => {
      try {
        const id = req.params.id;
        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ message: "Invalid ID format" });
        }
        const updateFields = req.body;
        if (Object.keys(updateFields).length === 0) {
          return res.status(400).json({ message: "At least one field is required to update" });
        }
        const result = await equipmentcollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updateFields }
        );
        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Equipment not found" });
        }
        res.status(200).json({ message: "Equipment updated successfully", updateFields });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    app.delete('/equipment/:id', async (req, res) => {
      try {
        const id = req.params.id;
        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ message: "Invalid ID format" });
        }
        const result = await equipmentcollection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Equipment not found" });
        }
        res.status(200).json({ message: "Equipment deleted successfully" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    // Drinks Routes (unchanged)
    app.get('/drinks', async (req, res) => {
      try {
        const drinks = await drinkscollection.find().toArray();
        res.status(200).json(drinks);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch drinks' });
      }
    });

    app.get('/drinks/:id', async (req, res) => {
      try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ error: 'Invalid ID format' });
        }
        const drink = await drinkscollection.findOne({ _id: new ObjectId(id) });
        if (!drink) return res.status(404).json({ error: 'Drink not found' });
        res.status(200).json(drink);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch drink' });
      }
    });

    app.post('/drinks', async (req, res) => {
      try {
        const { name, category, price, description, image } = req.body;
        if (!name || !category || !price || !description || !image) {
          return res.status(400).json({ message: 'All fields are required' });
        }
        const newDrink = { name, category, price, description, image, createdAt: new Date() };
        await drinkscollection.insertOne(newDrink);
        res.status(201).json({ message: 'Drink added successfully', drink: newDrink });
      } catch (error) {
        res.status(500).json({ message: 'Error adding drink', error: error.message });
      }
    });

    app.put('/drinks/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const updatedDrink = req.body;
        const result = await drinkscollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updatedDrink }
        );
        if (result.matchedCount === 0) return res.status(404).json({ error: 'Drink not found' });
        res.status(200).json({ message: 'Drink updated successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to update drink' });
      }
    });

    app.delete('/drinks/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const result = await drinkscollection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) return res.status(404).json({ error: 'Drink not found' });
        res.status(200).json({ message: 'Drink deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete drink' });
      }
    });

    // Chatbot Routes (unchanged)
    app.post('/chatbot/query', async (req, res) => {
      try {
        const { userId, question } = req.body;
        if (!userId || !question) {
          return res.status(400).json({ error: "userId and question are required" });
        }
        const prompt = `You are a helpful coffee shop assistant. Answer this question about coffee, our products, or services: ${question}`;
        const result = await model.generateContent(prompt);
        const botResponse = result.response.text() || "Sorry, I couldn't generate a response.";
        const chatEntry = {
          userId: new ObjectId(userId),
          question,
          response: botResponse,
          timestamp: new Date(),
        };
        await chatbotCollection.insertOne(chatEntry);
        res.status(200).json({ response: botResponse });
      } catch (error) {
        console.error('Error in chatbot query:', error);
        res.status(500).json({ error: "Failed to process query" });
      }
    });

    app.get('/chatbot/history/:userId', async (req, res) => {
      try {
        const { userId } = req.params;
        if (!ObjectId.isValid(userId)) {
          return res.status(400).json({ error: "Invalid userId format" });
        }
        const history = await chatbotCollection
          .find({ userId: new ObjectId(userId) })
          .sort({ timestamp: 1 })
          .toArray();
        res.status(200).json(history);
      } catch (error) {
        console.error('Error fetching chat history:', error);
        res.status(500).json({ error: "Failed to fetch chat history" });
      }
    });

    app.delete('/chatbot/history/:userId', async (req, res) => {
      try {
        const { userId } = req.params;
        if (!ObjectId.isValid(userId)) {
          return res.status(400).json({ error: "Invalid userId format" });
        }
        const result = await chatbotCollection.deleteMany({ userId: new ObjectId(userId) });
        res.status(200).json({ message: `Deleted ${result.deletedCount} chat entries` });
      } catch (error) {
        console.error('Error deleting chat history:', error);
        res.status(500).json({ error: "Failed to delete chat history" });
      }
    });

    // Review Routes
    app.post('/reviews', async (req, res) => {
      console.log('POST /reviews received:', req.body); // Debug log
      try {
        const { productId, productName, rating, feedback } = req.body;
        if (!productId || !productName || !rating) {
          return res.status(400).json({ message: "productId, productName, and rating are required" });
        }
        if (rating < 1 || rating > 5) {
          return res.status(400).json({ message: "Rating must be between 1 and 5" });
        }
        const newReview = {
          productId,
          productName,
          rating,
          feedback,
          date: new Date(),
        };
        await reviewsCollection.insertOne(newReview);
        res.status(201).json({ message: "Review submitted successfully", review: newReview });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    app.get('/reviews/:productId', async (req, res) => {
      try {
        const { productId } = req.params;
        const reviews = await reviewsCollection
          .find({ productId })
          .sort({ date: -1 })
          .toArray();
        res.status(200).json(reviews);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    app.get('/reviews', async (req, res) => {
      try {
        const reviews = await reviewsCollection
          .find()
          .sort({ date: -1 })
          .toArray();
        res.status(200).json(reviews);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    // Start Server
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

startServer();

process.on('SIGINT', async () => {
  await client.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});