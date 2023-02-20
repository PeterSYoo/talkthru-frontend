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
			{/* Container */}
			<div className='h-full w-full flex flex-col relative'>
				{/* Big screen */}
				<div className='max-h-screen max-w-screen flex items-center overflow-hidden'>
					{/* Conditionally sets big screen to the shared video or local user's video */}
					<PrimaryDisplay stream={screenSharingVideo || stream} />
				</div>

				{/* Options */}
				<div className='absolute top-[145px] left-[75px] flex flex-col gap-[16px]'>
					{/* Full Screen */}
					<div className='flex flex-col justify-center items-center m-[10px] gap-[10px]'>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681421/TalkThru/Meeting%20Room%20Page/full_screen_open.png'
							alt='full-screen-toggle-on'
						/>
						<span className='text-[15px] leading-[22px] font-poppins'>Full Screen</span>
					</div>

					{/* Settings */}
					<div className='flex flex-col justify-end items-center m-[10px] gap-[10px]'>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681683/TalkThru/Meeting%20Room%20Page/settings.png'
							alt='settings-toggle-open'
						/>
						<span className='text-[15px] leading-[22px] font-poppins'>Settings</span>
					</div>
				</div>

				{/* Timer */}
				<div className='absolute top-[120px] left-[50%]'>Timer</div>

				{/* Small screen */}
				<div className='h-[154px] w-[224px] absolute top-[145px] right-[80px] bg-[#C5C5C5] border border-solid rounded-md border-[#0B0A1D] shadow-meeting-room flex flex-col justify-start items-center pt-[25px]'>
					{/* No Local Stream */}
					<div className='flex flex-col items-center relative'>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681767/TalkThru/Meeting%20Room%20Page/person_default.png'
							alt='local-default-person'
						/>
						<span className='absolute bottom-[-5px] text-[10px] text-[#8B8A9C] font-["inter"] font-bold leading-[12px] truncate'>
							Jenn Phillips
						</span>
					</div>

					{/* Local Stream Notification */}
					<div className='flex self-start gap-[16px] pl-[16px]'>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676680940/TalkThru/Meeting%20Room%20Page/camera_off_dark_fill.png'
							alt='local-camera-off'
						/>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681052/TalkThru/Meeting%20Room%20Page/audio_off_dark_fill.png'
							alt='local-audio-off'
						/>
					</div>
					{/* {Object.values(peersToShow as PeersState)
						.filter((peer) => !!peer.stream)
						.map((peer) => (
							<div className=''>
								<VideoPlayer stream={peer.stream} />
								<div>{peer.userName}</div>
							</div>
						))} */}
				</div>
				{chat.isChatOpen && (
					<div className='border-l-2 pb-28'>
						<Chat />
					</div>
				)}

				{/* Toolbar */}
				<div className='h-[88px] w-full px-[80px] absolute bottom-0 bg-white/[.8] flex justify-between items-center'>
					{/* Left Container */}
					<div className='h-full flex gap-[32px]'>
						<div className='h-full flex flex-col justify-end items-center gap-[10px] pb-[10px]'>
							<img
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676680662/TalkThru/Meeting%20Room%20Page/camera_on_no_fill.png'
								alt='video-toggle-icon'
							/>
							<span className=''>Camera</span>
						</div>
						<div className='h-full flex flex-col justify-end items-center gap-[10px] pb-[10px]'>
							<img
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676680830/TalkThru/Meeting%20Room%20Page/audio_on_no_fill.png'
								alt='audio-toggle-icon'
							/>
							<span className=''>Audio</span>
						</div>
					</div>

					{/* Mid Container */}
					<div className='h-full flex gap-[32px]'>
						<div className='h-full flex flex-col justify-end items-center gap-[10px] pb-[10px]'>
							<img
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681555/TalkThru/Meeting%20Room%20Page/chat_normal.png'
								alt='chat-toggle-icon'
							/>
							<span className=''>Messages</span>
						</div>
						<div className='h-full flex flex-col justify-end items-center gap-[10px] pb-[10px]'>
							<img
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681415/TalkThru/Meeting%20Room%20Page/share_screen.png'
								alt='share-screen-toggle-icon'
							/>
							<span className=''>Share Screen</span>
						</div>
						<div className='h-full flex flex-col justify-end items-center gap-[10px] pb-[10px]'>
							<img
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681418/TalkThru/Meeting%20Room%20Page/notes.png'
								alt='notes-toggle-icon'
							/>
							<span className=''>Notes</span>
						</div>
						{/* <ChatButton onClick={toggleChat} />
						<ShareScreenButton onClick={shareScreen} screenSharingId={screenSharingId} /> */}
					</div>

					{/* Right Container */}
					<a href={`/room/${id}/postmeeting`} className=''>
						<button
							className='h-[40px] w-[135px] rounded-[10px] bg-[#ED1F0E] text-white text-[18px] shadow-meeting-room'
							onClick={() => console.log('Leave Room button clicked')}>
							Leave
						</button>
					</a>
				</div>
			</div>
		</>
	);
};
