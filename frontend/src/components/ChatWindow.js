import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import axios from 'axios';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId] = useState('user123');

  const sendMessage = async (text) => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/chat/send', {
        userId,
        text,
      });
      const { userMessage, botMessage } = res.data;
      setMessages((prev) => [...prev, userMessage, botMessage]);
    } catch (err) {
      console.error('Send failed', err);
    }
    setLoading(false);
  };

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <UserInput onSend={sendMessage} disabled={loading} />
    </div>
  );
};

export default ChatWindow;
