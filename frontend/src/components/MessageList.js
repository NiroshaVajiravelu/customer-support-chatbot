import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <Message key={msg._id} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
};

export default MessageList;
