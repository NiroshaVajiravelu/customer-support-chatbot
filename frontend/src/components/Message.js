import React from 'react';

const Message = ({ sender, text }) => {
  return (
    <div className={`message ${sender === 'user' ? 'user' : 'bot'}`}>
      <strong>{sender === 'user' ? 'You' : 'Bot'}:</strong> {text}
    </div>
  );
};

export default Message;
