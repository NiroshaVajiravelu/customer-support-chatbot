const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  sender: String, // "user" or "ai"
  text: String,
  timestamp: {
    type: Date,
    default: Date.now
  },
  conversationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' }
});

module.exports = mongoose.model('Message', MessageSchema);
