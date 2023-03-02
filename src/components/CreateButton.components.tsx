import { webSocket } from '../webSocket';

interface IButton {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const CreateButton: React.FC<IButton> = ({ onClick }) => {
	// Using the useContext hook, we access the RoomContext object

	// Function that emits a 'create-room' event to the WebSocket server
	// const createRoom = () => {
	// 	webSocket.emit('create-room');
	// };

	// The component returns a button that, when clicked, calls the createRoom function
	return (
		<button
			onClick={onClick}
			className='rounded-lg bg-rose-400 py-2 px-8 text-xl text-white hover:bg-rose-600'>
			Start new meeting
		</button>
	);
};
