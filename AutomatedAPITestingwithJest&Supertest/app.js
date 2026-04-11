const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth');

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoUri =
      process.env.NODE_ENV === 'test'
        ? process.env.MONGODB_URI_TEST
        : process.env.MONGODB_URI;

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected to: ${mongoUri}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Routes
app.use('/api/auth', authRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// Export app and connectDB function
module.exports = { app, connectDB };
