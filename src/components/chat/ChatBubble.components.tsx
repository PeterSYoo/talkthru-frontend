import { useContext } from "react";
import { UserContext } from '../../contexts/UserContext';
import { RoomContext } from '../../contexts/RoomContext';
import { IMessage } from '../../types/Chat';

export const ChatBubble: React.FC<{ message: IMessage }> = ({ message }) => {
	// Destructure context for the props we need
	const { userId } = useContext(UserContext);
	const { peers } = useContext(RoomContext);

	// Boolean to dynamically determine styling for the chat bubble
	const isSelf = message.authorId === userId;

	// Use message prop to define elements of the chat bubble
	const author = message.authorId && peers[message.authorId];
	const authorName = isSelf ? 'You' : author?.userName || 'Anonymous';
	const time = new Date(message.timestamp).toLocaleTimeString();

	return (
		<>
			{/* Row Container */}
			<div
				className={`my-2 flex font-archivo ${
					isSelf ? 'mr-[21px] justify-end pl-9' : 'ml-[19px] justify-start pr-9'
				}`}>
				{/* Chat Bubble Container */}
				<div className='flex flex-col'>
					{/* Message Container */}
					<div
						className={`shadow-[0px 1px 6px 0px rgba(0, 0, 0, 0.25)] inline-block rounded p-[10px] text-[14px] ${
							isSelf ? 'bg-[#EFD38A]' : 'bg-[#E4E325]'
						}`}>
						{message.content}
						{/* Timer Container */}
						<div className={`text-xs opacity-50 ${isSelf ? 'text-right' : 'text-left'}`}>
							{time}
						</div>
					</div>
					{/* Author Container */}
					<div className={`text-xs  ${isSelf ? 'text-right' : 'text-left'}`}>{authorName}</div>
				</div>
			</div>
		</>
	);
};