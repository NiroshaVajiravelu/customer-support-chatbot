const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
  userId: String,
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
});

module.exports = mongoose.model('Conversation', ConversationSchema);
