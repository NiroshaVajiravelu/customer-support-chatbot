const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  startedAt: {
    type: Date,
    default: Date.now,
  },
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  }],
});

module.exports = mongoose.model('Conversation', ConversationSchema);
