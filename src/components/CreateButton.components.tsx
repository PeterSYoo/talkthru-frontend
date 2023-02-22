import { webSocket } from '../webSocket';

export const CreateButton: React.FC = () => {
	// Using the useContext hook, we access the RoomContext object

	// Function that emits a 'create-room' event to the WebSocket server
	const createRoom = () => {
		webSocket.emit('create-room');
	};

	// The component returns a button that, when clicked, calls the createRoom function
	return (
		<button
			onClick={createRoom}
			className='bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white'>
			Start new meeting
		</button>
	);
};
