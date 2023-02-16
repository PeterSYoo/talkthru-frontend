import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { webSocket } from '../webSocket';
import { UserContext } from '../contexts/UserContext';
import { RoomContext } from '../contexts/RoomContext';
import { ChatContext } from '../contexts/ChatContext';
import { PeersState } from '../reducers/peersReducer';
import { VideoPlayer } from '../components/VideoPlayer.components';
import { ShareScreenButton } from '../components/ShareScreenButton.components';
import { ChatButton } from '../components/ChatButton.components';
import { Chat } from '../components/chat/Chat.components';

export const RoomPage = () => {
	// Destructure the `id` from the URL parameters using `useParams` hook.
	const { id } = useParams();

	// Destructure context for the props we need
	const { userName, userId } = useContext(UserContext);
	const { stream, screenStream, screenSharingId, peers, shareScreen, setRoomId } =
		useContext(RoomContext);
	const { chat, toggleChat } = useContext(ChatContext);

	// Emits 'join-room' event after 'stream' object is available
	useEffect(() => {
		if (stream) {
			webSocket.emit('join-room', { roomId: id, peerId: userId, userName });
		}
	}, [id, userId, stream, userName]);

	// Updates 'roomId' state when local peer joins/leaves a room
	useEffect(() => {
		setRoomId(id);
	}, [id, setRoomId]);

	// Ternary to determine which peer is sharing their screen
	// If there isn't a screenSharingId or screenSharingId matches local peer's id -> use 'stream' in state
	const screenSharingVideo =
		screenSharingId === userId ? screenStream : peers[screenSharingId]?.stream;

	// Destructure 'peers' state object to filter peers
	const { [screenSharingId]: sharing, ...peersToShow } = peers;
	// console.log({screenSharingId});
	// console.log({screenSharingVideo});
	// console.log({sharing});

	return (
		<>
			<div className='flex flex-col min-h-screen'>
				<div className='bg-blue-500 p-4 text-white'>Room id: {id}</div>
				<div className='flex grow'>
					{/* Primary screen */}
					<div className='w-4/5 pr-4'>
						{/* Conditionally sets primary screen to the shared video or local user's video */}
						<VideoPlayer stream={screenSharingVideo || stream} />
						{!screenSharingId || screenSharingId === userId
							? userName
							: peers[screenSharingId].userName}
					</div>

					{/* Peer screens */}
					<div className='w-1/5 grid gap-4 grid-col-1'>
						{/* Includes local stream in-line with peers if it isn't being shared */}
						{screenSharingId && screenSharingId !== userId && (
							<div>
								<VideoPlayer stream={stream} />
								<div>{userName}</div>
							</div>
						)}
						{Object.values(peersToShow as PeersState)
							.filter((peer) => !!peer.stream)
							.map((peer) => (
								<div>
									<VideoPlayer stream={peer.stream} />
									<div>{peer.userName}</div>
								</div>
							))}
					</div>
					{chat.isChatOpen && (
						<div className='border-l-2 pb-28'>
							<Chat />
						</div>
					)}
				</div>
				<div className='h-28 fixed bottom-0 p-6 w-full flex justify-center border-t-2 bg-white'>
					<ShareScreenButton onClick={shareScreen} screenSharingId={screenSharingId} />
					<ChatButton onClick={toggleChat} />
				</div>
			</div>
			<div>
				<a href={`/room/${id}/postmeeting`}>Leave Room</a>
			</div>
		</>
	);
};
