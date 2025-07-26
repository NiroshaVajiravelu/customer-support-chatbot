import React, { useState } from 'react';

const UserInput = ({ onSend, disabled }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text.trim());
      setText('');
    }
  };

  return (
    <div className="user-input">
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
      />
      <button onClick={handleSend} disabled={disabled}>Send</button>
    </div>
  );
};

export default UserInput;
