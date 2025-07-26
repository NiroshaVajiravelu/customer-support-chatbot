const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  sender: {
    type: String, // 'user' or 'bot'
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation',
    required: true,
  },
});

module.exports = mongoose.model('Message', MessageSchema);
