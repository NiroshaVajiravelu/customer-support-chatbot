const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const Conversation = require('../models/Conversation');

// Utility: Keyword-based chatbot logic
const getBotResponse = (text) => {
  const input = text.toLowerCase();

  if (input.includes('t-shirt') || input.includes('shirt')) {
    return 'We have a wide collection of T-shirts! What size are you looking for?';
  } else if (input.includes('jeans')) {
    return 'We offer various styles of jeans. Are you looking for skinny, straight, or relaxed fit?';
  } else if (input.includes('order status') || input.includes('track')) {
    return 'To track your order, please provide your order number.';
  } else if (input.includes('refund') || input.includes('return')) {
    return 'Please share your order ID so we can initiate the refund or return process.';
  } else if (input.includes('hello') || input.includes('hi')) {
    return 'Hello! How can I help you today? 😊';
  } else if (input.includes('bye')) {
    return 'Thank you for visiting us! Have a great day!';
  } else {
    return `You said: "${text}". How can I assist you further?`;
  }
};

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

    // 3. Generate intelligent bot reply
    const botText = getBotResponse(text);
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
