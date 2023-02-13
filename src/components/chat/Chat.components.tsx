import { useContext } from "react";
import { RoomContext } from "../../contexts/RoomContext";
import { ChatBubble } from "./ChatBubble.components";
import { ChatInput } from "./ChatInput.components";

// Type definition for a message
interface IMessage {
  content: string;
  author?: string;
  timestamp: number;
}

export const Chat: React.FC = ({}) => {
  // Destructure the required values from `RoomContext` using the `useContext` hook.
  const { chat } = useContext(RoomContext);

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {chat.messages.map((message: IMessage) => (
          <ChatBubble message={message}/>
        ))}
      </div>
      <ChatInput />
    </div>
  );
};