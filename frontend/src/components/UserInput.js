import React, { useContext } from 'react';
import ChatContext from '../context/ChatContext';

function UserInput({ onSend }) {
  const { state, dispatch } = useContext(ChatContext);

  const handleSend = () => {
    if (state.inputValue.trim()) {
      onSend(state.inputValue);
      dispatch({ type: 'SET_INPUT', payload: '' });
    }
  };

  return (
    <div className="flex gap-2 mt-2">
      <input
        className="border px-2 py-1 flex-1"
        value={state.inputValue}
        onChange={(e) => dispatch({ type: 'SET_INPUT', payload: e.target.value })}
        placeholder="Type your message..."
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-1 rounded">
        Send
      </button>
    </div>
  );
}

export default UserInput;
