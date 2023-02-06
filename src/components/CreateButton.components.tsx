import { useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext';

export const CreateButton: React.FC = () => {
  // Using the useContext hook, we access the RoomContext object
  const { ws } = useContext(RoomContext);

  // createRoom is a function that emits a 'create-room' event using the WebSocket object
  const createRoom = () => {
    ws.emit('create-room');
  };

  // The component returns a button that, when clicked, calls the createRoom function
  return (
    <button
      onClick={createRoom}
      className="bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white"
    >
      Start new meeting
    </button>
  );
};
