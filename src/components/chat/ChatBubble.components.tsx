import { useContext } from "react";
import { UserContext } from '../../contexts/UserContext';
import { RoomContext } from '../../contexts/RoomContext';

// Type definition for a message
interface IMessage {
	content: string;
	author?: string;
	timestamp: number;
}

export const ChatBubble: React.FC<{ message: IMessage }> = ({ message }) => {
	// Destructure context for the props we need
	const { userId } = useContext(UserContext);
	const { peers } = useContext(RoomContext);

	// Use message prop to define elements of the chat bubble
	const author = message.author && peers[message.author];
	const authorName = author?.userName || 'anonymous';
	const time = new Date(message.timestamp).toLocaleTimeString();

	// Boolean to dynamically determine styling for the chat bubble
	// Uses optional chaining to make sure 'me' exists before reading it's properties to prevent a TypeError
	const isSelf = message.author === userId;

	return (
		<div className={`m-2 flex ${isSelf ? 'pl-10 justify-end' : 'pr-10 justify-start'}`}>
			<div className='flex flex-col'>
				<div className={`inline-block py-2 px-4 rounded ${isSelf ? 'bg-gray-200' : 'bg-gray-400'}`}>
					{message.content}
					<div className={`text-xs opacity-50 ${isSelf ? 'text-right' : 'text-left'}`}>{time}</div>
				</div>
				<div className={`text-xs ${isSelf ? 'text-right' : 'text-left'}`}>
					{isSelf ? 'You' : authorName}
				</div>
			</div>
		</div>
	);
};