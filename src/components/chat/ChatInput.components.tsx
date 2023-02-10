import { useState, useContext } from "react";
import { RoomContext } from "../../contexts/RoomContext";

export const ChatInput: React.FC = () => {
  // State for user's chat input
  const [message, setMessage] = useState<string>("");
  // Deconstruct the props we need from RoomContext
  const { sendMessage } = useContext(RoomContext);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message);
          setMessage("");
        }}
      >
        <div className="flex">
          <textarea
            className="border rounded"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-600 py-2 px-4 mx-2 rounded-lg text-xl text-white"
            >
              Send
          </button>
        </div>
      </form>
    </div>
  );
};