import React, { useState, type ReactNode } from "react";

interface FloatingChatProps {
  children: ReactNode;
}

const FloatingChat: React.FC<FloatingChatProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger button */}
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white shadow-xl rounded-lg border border-gray-200 flex flex-col">
          <div className="p-3 border-b font-semibold text-gray-700">
            Chat
          </div>
          <div className="flex-1 p-3 overflow-y-auto text-sm text-gray-600">
            <p>Welcome to the floating chat!</p>
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChat;