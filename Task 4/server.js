require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const User = require('./models/User');
const app= express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(" MongoDB connected successfully!"))
.catch(err => console.error(" MongoDB connection error:", err.message));

app.post("/add-user", async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const newUser = new User({ name, email, age });
      await newUser.save();
      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  const PORT = 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));