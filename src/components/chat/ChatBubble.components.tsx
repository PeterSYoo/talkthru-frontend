import { useContext } from "react";
import { RoomContext } from "../../contexts/RoomContext";

// Type definition for a message
interface IMessage {
  content: string;
  author?: string;
  timestamp: number;
}

export const ChatBubble: React.FC<{message: IMessage}> = ({message}) => {
  // Get state for local peer to dynamically set styling depending on message's author
  const { me } = useContext(RoomContext)
  // Uses optional chaining to make sure 'me' exists before reading it's properties to prevent a TypeError
  const isSelf = message.author === me?.id;

  return (
    <div className={`m-2 flex ${isSelf ? "pl-10 justify-end" : "pr-10 justify-start"}`}>
      <div className={`inline-block py-2 px-4 rounded ${isSelf ? "bg-gray-200" : "bg-gray-400"}`}>
        {message.content}
      </div>
    </div>
  );
};