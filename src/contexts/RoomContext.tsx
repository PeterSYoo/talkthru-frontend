import { createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

const WS = 'http://localhost:8080';

// Initializes the context with value of null, RoomContext becomes an object that contains 2 components living as methods, 'Provider' and 'Consumer'.
export const RoomContext = createContext<null | any>(null);

// Initializes a websocket connection to the server so client and server can communicate by emitting and receiving events.
const ws = io(WS);

// 'children' prop represents the components that will be wrapped with RoomProvider. RoomContext.Provider component provides the 'ws' websocket connection to its descendants. The 'value' prop is made available to all children components through the RoomContext.Consumer which is also known as the useContext hook.
export const RoomProvider = ({ children }: { children: any }) => {
  const navigate = useNavigate();

  const enterRoom = ({ roomId }: { roomId: string }) => {
    console.log({ roomId });
    navigate(`/room/${roomId}`);
  };

  useEffect(() => {
    ws.on('room-created', enterRoom);
  }, []);

  return <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>;
};
