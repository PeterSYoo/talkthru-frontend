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
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					sendMessage(message, roomId, userId);
					setMessage('');
				}}>
				<div className='flex'>
					<textarea
						className='border rounded'
						onChange={(e) => setMessage(e.target.value)}
						value={message}
					/>
					<button
						type='submit'
						className='bg-green-400 hover:bg-green-600 py-2 px-4 mx-2 rounded-lg text-xl text-white'>
						Send
					</button>
				</div>
			</form>
		</div>
	);
};