import { useContext } from "react";
import { ChatContext } from '../../contexts/ChatContext';
import { ChatBubble } from "./ChatBubble.components";
import { ChatInput } from "./ChatInput.components";

// Type definition for a message
interface IMessage {
  content: string;
  author?: string;
  timestamp: number;
}

export const Chat: React.FC = ({}) => {
	// Destructure context for the props we need
	const { chat } = useContext(ChatContext);

	return (
		<div className='flex flex-col h-full justify-between'>
			<div>
				{chat.messages.map((message: IMessage) => (
					<ChatBubble message={message} />
				))}
			</div>
			<ChatInput />
		</div>
	);
};