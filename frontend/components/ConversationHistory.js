import React, { useEffect, useState, useContext } from 'react';
import ChatContext from '../context/ChatContext';

function ConversationHistory({ onSelect }) {
  const [users, setUsers] = useState([]);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    // Mock: replace with backend logic to fetch unique user sessions
    setUsers(['user1', 'user2', 'user3']);
  }, []);

  const handleClick = async (userId) => {
    try {
      const res = await fetch(`http://localhost:3000/api/chat/history/${userId}`);
      const data = await res.json();
      dispatch({ type: 'LOAD_MESSAGES', payload: data.messages });
      onSelect(userId);
    } catch (err) {
      console.error('Failed to load conversation history', err);
    }
  };

  return (
    <div className="w-48 border-r p-2 bg-white shadow-sm">
      <h2 className="font-bold mb-2">Conversations</h2>
      {users.map((u) => (
        <div
          key={u}
          onClick={() => handleClick(u)}
          className="cursor-pointer p-1 hover:bg-gray-200 rounded"
        >
          {u}
        </div>
      ))}
    </div>
  );
}

export default ConversationHistory;
