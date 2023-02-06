import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from '../components/VideoPlayer.components';
import { PeersState } from '../contexts/peersReducer';
import { RoomContext } from '../contexts/RoomContext';

export const RoomPage = () => {
  // Destructure the `id` from the URL parameters using `useParams` hook.
  const { id } = useParams();

  // Destructure the required values from the `RoomContext` using the `useContext` hook.
  const { ws, me, stream, peers } = useContext(RoomContext);

  // Use the `useEffect` hook to join the room when the `me` object is available.
  useEffect(() => {
    // If the `me` object is available, emit a 'join-room' event with the `roomId` and `peerId` to the WebSocket.
    if (me) ws.emit('join-room', { roomId: id, peerId: me._id });
  }, [id, me, ws]);

  return (
    <>
      Room id {id}
      <div className="">
        <div className="grid grid-cols-4 gap-4">
          <VideoPlayer stream={stream} />
          {peers &&
            Object.values(peers as PeersState).map((peer) => (
              <VideoPlayer stream={peer.stream} />
            ))}
        </div>
      </div>
    </>
  );
};
