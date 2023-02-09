import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from '../components/VideoPlayer.components';
import { PeersState } from '../contexts/peersReducer';
import { RoomContext } from '../contexts/RoomContext';
import { ShareScreenButton } from '../components/ShareScreenButton';

export const RoomPage = () => {
  // Destructure the `id` from the URL parameters using `useParams` hook.
  const { id } = useParams();

  // Destructure the required values from the `RoomContext` using the `useContext` hook.
  const { ws, me, stream, peers, shareScreen, screenSharingId, setRoomId } = useContext(RoomContext);

  // Use the `useEffect` hook to join the room when the `me` object is available.
  useEffect(() => {
    // If the `me` object is available, emit a 'join-room' event with the `roomId` and `peerId` to the WebSocket.
    if (me) ws.emit('join-room', { roomId: id, peerId: me._id });
  }, [id, me, ws]);

  // Updates roomId state when local peer joins/leaves a room
  useEffect(() => {
    setRoomId(id);
  }, [id, setRoomId]);

  // Ternary to determine which peer is sharing their screen
  // If there isn't a screenSharingId or screenSharingId matches local peer's id -> use 'stream' in state
  const screenSharingVideo = screenSharingId === me?.id ? stream : peers[screenSharingId]?.stream;

  // Destructure 'peers' state object
  const { [screenSharingId]: sharing, ...peersToShow } = peers;

  return (
    <>
      Room id {id}
      <div className="flex">
        {/* Primary screen */}
          <div className="w-4/5 pr-4">
            {/* Conditionally sets primary screen to the shared video or local user's video */}
            <VideoPlayer stream={screenSharingVideo || stream} />
          </div>

        {/* Peer screens */}
        <div className="w-1/5 grid gap-4 grid-col-1">
          {/* Includes local stream in-line with peers if it isn't being shared */}
          {screenSharingId && screenSharingId !== me?.id &&
            <VideoPlayer stream={stream} />
          }
          {peers &&
            Object.values(peersToShow as PeersState).map((peer) => (
              <VideoPlayer stream={peer.stream} />
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 p-6 w-full flex justify-center border-t-2">
        <ShareScreenButton onClick={shareScreen}/>
      </div>
    </>
  );
};
