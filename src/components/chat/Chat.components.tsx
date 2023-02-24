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
		<>
			{/* Chat Container */}
			<div className='absolute top-[-506px] right-0 h-[506px] w-[303px] rounded-[10px] border-t border-l border-[#0B0A1D] bg-[#D0CFCF]'>
				{/* Chat Header */}
				<div className='flex h-[93px] items-center justify-center border-b border-black'>
					{/* Messages Icon */}
					<div className='flex h-[63px] w-[96px] flex-col items-center justify-items-start gap-[10px] border-b border-black'>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681555/TalkThru/Meeting%20Room%20Page/chat_normal.png'
							alt='chat-toggle-icon'
							className='h-[24px] w-[24px]'
						/>
						<span className='leading-[22.5px]'>Messages</span>
					</div>
					{/* Notes Icon */}
					<div className='flex h-[63px] w-[96px] flex-col items-center justify-items-start gap-[10px] border-b border-black'>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681418/TalkThru/Meeting%20Room%20Page/notes.png'
							alt='notes-toggle-icon'
							className='h-[24px] w-[24px]'
						/>
						<span className='leading-[22.5px]'>Notes</span>
					</div>
				</div>
				{/* Messages Container */}
				<div className='flex flex-col justify-between'>
					<div>
						{chat.messages.map((message: IMessage) => (
							<ChatBubble message={message} />
						))}
					</div>
				</div>
				<ChatInput />
			</div>
		</>
	);
};