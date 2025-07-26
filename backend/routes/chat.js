const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const Conversation = require('../models/Conversation');

// POST /api/chat/send
router.post('/send', async (req, res) => {
  try {
    const { userId, text } = req.body;

    // 1. Find or create conversation
    let convo = await Conversation.findOne({ userId });
    if (!convo) {
      convo = await Conversation.create({ userId });
    }

    // 2. Create user message
    const userMsg = await Message.create({
      sender: 'user',
      text,
      conversationId: convo._id,
    });

    // 3. Create bot reply (mock)
    const botText = `You said: "${text}". How can I assist you further?`;
    const botMsg = await Message.create({
      sender: 'bot',
      text: botText,
      conversationId: convo._id,
    });

    // 4. Update conversation with messages
    convo.messages.push(userMsg._id, botMsg._id);
    await convo.save();

    res.json({ userMessage: userMsg, botMessage: botMsg });
  } catch (err) {
    console.error('Chat send error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/chat/history/:userId
router.get('/history/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const convo = await Conversation.findOne({ userId }).populate('messages');
    if (!convo) {
      return res.status(404).json({ message: 'No conversation found.' });
    }

    res.json(convo);
  } catch (err) {
    console.error('History fetch error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
