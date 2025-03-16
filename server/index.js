// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
// Import routes
const converterRoutes = require('./routes/converter');

// Configure environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// // Create uploads and downloads directories if they don't exist
// const uploadsDir = path.join(__dirname, 'uploads');
// const downloadsDir = path.join(__dirname, 'downloads');

// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir);
// }

// if (!fs.existsSync(downloadsDir)) {
//   fs.mkdirSync(downloadsDir);
// }

// Middleware
app.use(cors());
app.use(express.json());
app.use('/downloads', express.static(path.join(__dirname, 'downloads')));
// Routes
app.use('/api/converter', converterRoutes);


// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });