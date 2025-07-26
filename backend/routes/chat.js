import express from "express";
import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";

const router = express.Router();

// POST /api/chat
router.post("/", async (req, res) => {
  const { userId, message } = req.body;
  let convo = await Conversation.findOne({ where: { userId } });
  if (!convo) convo = await Conversation.create({ userId });

  const userMsg = await Message.create({
    sender: "user",
    content: message,
    ConversationId: convo.id
  });

  // TODO: Integrate LLM logic in Milestone 5
  const aiReply = await Message.create({
    sender: "ai",
    content: "This is a placeholder AI response.",
    ConversationId: convo.id
  });

  res.json({ userMsg, aiReply });
});

export default router;
