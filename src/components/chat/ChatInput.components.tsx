import { useState, useContext } from "react";
import { ChatContext } from '../../contexts/ChatContext';
import { RoomContext } from '../../contexts/RoomContext';
import { UserContext } from '../../contexts/UserContext';

export const ChatInput: React.FC = () => {
	// State for user's chat input
	const [message, setMessage] = useState<string>('');

	// Destructure context for the props we need
	const { userId } = useContext(UserContext);
	const { roomId } = useContext(RoomContext);
	const { sendMessage } = useContext(ChatContext);

	return (
		<>
			{/* Chat Input Container */}
			<form
				className='mx-auto flex h-[39px] w-[285px] items-center gap-[8px] rounded-full bg-[#E1E0E0] px-[12px]'
				onSubmit={(e) => {
					e.preventDefault();
					sendMessage(message, roomId, userId);
					setMessage('');
				}}>
				{/* Camera Container */}
				<div className='h-[28px] w-[28px]'>
					<img
						src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676592008/TalkThru/Meeting%20Room%20Page/chat_camera_x2ackv.png'
						alt='chat-input-camera'
					/>
				</div>
				{/* Message Input */}
				<input
					className='w-[160px] bg-[#E1E0E0] font-openSans leading-[19px] focus:outline-none'
					placeholder='Message...'
					onChange={(e) => setMessage(e.target.value)}
					value={message}
				/>
				{/* Attachment Container */}
				<div className='h-[28px] w-[28px]'>
					<img
						src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676592008/TalkThru/Meeting%20Room%20Page/chat_attach_image.png'
						alt='chat-input-attachment'
					/>
				</div>
				{/* Send Message Button */}
				<button type='submit' className='h-[21px] w-[20px]'>
					<img
						src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676592008/TalkThru/Meeting%20Room%20Page/chat_send_qtt6kt.png'
						alt='chat-input-send'
					/>
				</button>
			</form>
		</>
	);
};