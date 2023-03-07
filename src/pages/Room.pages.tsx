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
import { PrimaryDisplay } from '../components/video/PrimaryDisplay.components';
import { SecondaryDisplay } from '../components/video/SecondaryDisplay.components';

interface IPeer {
	peerId: string;
	userName?: string;
	stream?: MediaStream;
	videoEnabled?: boolean;
	audioEnabled?: boolean;
}

export const RoomPage = () => {
	// Destructure the `id` from the URL parameters using `useParams` hook.
	const { id } = useParams();

	// Destructure context for the props we need
	const { userData, userName, userId, handleFetchUserData } = useContext(UserContext);
	const { me, stream, screenStream, screenSharingId, peers, shareScreen, setRoomId } =
		useContext(RoomContext);
	const { chat, toggleMessages, toggleNotes } = useContext(ChatContext);

	useEffect(() => {
		handleFetchUserData();
	}, []);

	// Emits 'join-room' event after 'stream' object is available
	useEffect(() => {
		if (me && stream && userId) {
			// console.log('Stream is valid, "join-room" emitted');
			webSocket.emit('join-room', { roomId: id, peerId: userId, userName });
		}
	}, [id, me, stream, userId]);

	// Updates 'roomId' state when local peer joins/leaves a room
	useEffect(() => {
		setRoomId(id);
		// handleUpdateRoomId(userId, id);
	}, [id, setRoomId]);

	// Ternary to determine which peer is sharing their screen
	// If there isn't a screenSharingId or screenSharingId matches local peer's id -> use 'stream' in state
	const screenSharingVideo =
		screenSharingId === userId ? screenStream : peers[screenSharingId]?.stream;

	// Destructure 'peers' state object to filter peers
	const { [screenSharingId]: sharing, ...peersToShow } = peers;
	// Isolate the remote peer from the local peer
	const remotePeer = Object.values(peers as PeersState).filter((peer) => peer.peerId !== userId)[0];

	// console.log({ remotePeer });

	return (
		<>
			{/* Container */}
			<div className='relative flex h-full w-full flex-col bg-[#BFBFBF]'>
				{/* Large Display */}
				<div className='absolute flex h-full w-full flex-col items-center justify-center'>
					{/* Conditionally sets large display to the shared video or local user's video */}
					{remotePeer?.stream ? (
						<PrimaryDisplay stream={remotePeer.stream} />
					) : (
						<div className='relative flex flex-col items-center'>
							<img
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676926240/TalkThru/Meeting%20Room%20Page/person_default_large.png'
								alt='local-default-person'
							/>
							<span className='absolute bottom-[-26px] w-full truncate text-center font-["inter"] text-[48px] font-bold leading-[58px] text-[#8B8A9C]'>
								{remotePeer?.userName || 'Anonymous'}
							</span>
						</div>
					)}
				</div>

				{/* Options */}
				<div className='absolute top-[64px] left-[75px] flex flex-col gap-[16px]'>
					{/* Full Screen */}
					<div className='m-[10px] flex flex-col items-center justify-center gap-[10px]'>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681421/TalkThru/Meeting%20Room%20Page/full_screen_open.png'
							alt='full-screen-toggle-on'
						/>
						<span className='font-poppins text-[15px] leading-[22px]'>Full Screen</span>
					</div>

					{/* Settings */}
					<div className='m-[10px] flex flex-col items-center justify-end gap-[10px]'>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681683/TalkThru/Meeting%20Room%20Page/settings.png'
							alt='settings-toggle-open'
						/>
						<span className='font-poppins text-[15px] leading-[22px]'>Settings</span>
					</div>
				</div>

				{/* Timer */}
				<div className='absolute top-[32px] left-[50%]'>Timer</div>

				{/* Small Display */}
				<div className='absolute top-[64px] right-[80px] flex h-[154px] w-[224px] flex-col items-center justify-start rounded-md border border-solid border-[#0B0A1D] bg-[#C5C5C5] shadow-meeting-room'>
					{/* Conditionally renders local stream or default background */}
					{stream ? (
						<SecondaryDisplay stream={stream} />
					) : (
						<div className='relative flex flex-col items-center'>
							<img
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681767/TalkThru/Meeting%20Room%20Page/person_default_small.png'
								alt='local-default-person'
							/>
							<span className='absolute bottom-[-5px] truncate font-["inter"] text-[10px] font-bold leading-[12px] text-[#8B8A9C]'>
								{userName}
							</span>
						</div>
					)}

					{/* Local Stream Notification */}
					<div className='absolute bottom-[13px] left-[16px] flex gap-[16px] self-start'>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681301/TalkThru/Meeting%20Room%20Page/camera_on_white_fill.png'
							alt='local-video-on'
						/>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1677023061/TalkThru/Meeting%20Room%20Page/audio_on_white_fill.png'
							alt='local-audio-on'
						/>
					</div>
				</div>

				{/* Toolbar */}
				<div className='absolute bottom-0 flex h-[88px] w-full items-center justify-between bg-white/[.8] px-[80px]'>
					{/* Left Container */}
					<div className='flex h-full gap-[32px]'>
						<ChatButton
							onClick={() => {}}
							title='Camera'
							imageUrl='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676680662/TalkThru/Meeting%20Room%20Page/camera_on_no_fill.png'
							altText='video-toggle-icon'
						/>
						<ChatButton
							onClick={() => {}}
							title='Mute'
							imageUrl='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676680830/TalkThru/Meeting%20Room%20Page/audio_on_no_fill.png'
							altText='audio-toggle-icon'
						/>
					</div>

					{/* Mid Container */}
					<div className='flex h-full gap-[32px]'>
						<ChatButton
							onClick={toggleMessages}
							title='Messages'
							imageUrl='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681555/TalkThru/Meeting%20Room%20Page/chat_normal.png'
							altText='chat-messages-toggle-icon'
						/>
						<ChatButton
							onClick={() => {}}
							title='Share Screen'
							imageUrl='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681415/TalkThru/Meeting%20Room%20Page/share_screen.png'
							altText='share-screen-toggle-icon'
						/>
						<ChatButton
							onClick={toggleNotes}
							title='Notes'
							imageUrl='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681418/TalkThru/Meeting%20Room%20Page/notes.png'
							altText='chat-notes-toggle-icon'
						/>
						{/* Dynamically Render Chat */}
						{(chat.isMessagesOpen || chat.isNotesOpen) && <Chat />}
						{/* <ShareScreenButton onClick={shareScreen} screenSharingId={screenSharingId} /> */}
					</div>

					{/* Right Container */}
					<a href={`/room/${id}/postmeeting`} className=''>
						<button
							className='h-[40px] w-[135px] rounded-[10px] bg-[#ED1F0E] text-[18px] text-white shadow-meeting-room'
							onClick={() => console.log('Leave Room button clicked')}>
							Leave
						</button>
					</a>
				</div>
			</div>
		</>
	);
};
