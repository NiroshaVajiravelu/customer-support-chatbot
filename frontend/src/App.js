import React from 'react';
import { ChatProvider } from './context/ChatContext';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <ChatWindow />
      </div>
    </ChatProvider>
  );
}

export default App;
