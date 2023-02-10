import { ChatBubble } from "./ChatBubble.components";
import { ChatInput } from "./ChatInput.components";

// Type definition for a message
interface IMessage {
  content: string;
  author: string;
  timestamp: string;
}

export const Chat: React.FC = ({}) => {
  // Stores all messages from chat
  // Dummy data --> REMOVE BEFORE PUSH
  const messages: IMessage[] = [
    {
      content: "First message",
      author: '',
      timestamp: '',
    },
    {
      content: "Second message",
      author: '',
      timestamp: '',
    },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {messages.map((message) => (
          <ChatBubble message={message}/>
        ))}
      </div>
      <ChatInput />
    </div>
  );
};