import { ChatBubble } from "./ChatBubble.components";
import { ChatInput } from "./ChatInput.components";

// Type definition for a message
interface IMessage {
  content: string;
  author?: string;
  timestamp: number;
}

export const Chat: React.FC = ({}) => {
  // Stores all messages from chat
  // Dummy data --> REMOVE BEFORE PUSH
  const messages: IMessage[] = [
    {
      content: "First message",
      author: '',
      timestamp: 0,
    },
    {
      content: "Second message",
      author: '',
      timestamp: 0,
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