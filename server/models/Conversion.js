// server/models/Conversion.js
const mongoose = require('mongoose');

const ConversionSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
    required: true
  },
  audioQuality: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  filePath: {
    type: String
  },
  fileName: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'failed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Conversion', ConversionSchema);