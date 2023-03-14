import { createContext, useContext, useEffect, useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Peer, { MediaConnection } from 'peerjs';
import { webSocket } from '../webSocket';
import {
	addPeerConnectionAction,
	addPeerStreamAction,
	addPeerNameAction,
	addAllPeersAction,
	removePeerAction,
} from '../reducers/peersActions';
import { peersReducer, PeersState } from '../reducers/peersReducer';
import { UserContext } from './UserContext';

interface IPeer {
	userName: string;
	peerId: string;
}

// Set the URL of the backend server
const server_url = import.meta.env.VITE_BACKEND_URL as string;

// Create a context for sharing data across components
export const RoomContext = createContext<null | any>(null);

// Room provider component to manage state and provide context
export const RoomProvider = ({ children }: { children: any }) => {
	// Hook for navigating between routes
	const navigate = useNavigate();

	// State to store the local peer
	const [me, setMe] = useState<Peer>();
	// State to store the local media stream
	const [stream, setStream] = useState<MediaStream>();
	// State to keep track of the stream to share when screen sharing
	const [screenStream, setScreenStream] = useState<MediaStream>();
	// State to keep track of the peer who is currently screen sharing
	const [screenSharingId, setScreenSharingId] = useState<string>('');
	// State to keep track of data for remote peers
	const [peers, peersDispatch] = useReducer(peersReducer, {});
	// State to keep track of the room ID for the local peer
	const [roomId, setRoomId] = useState<string>('');

	// Destructure context for the props we need
	const { userName, userId, userData, setUserData } = useContext(UserContext);

	// Function to join a room when room is created or when a user is matched
	const enterRoom = ({ roomId }: { roomId: string }) => {
		navigate(`/room/${roomId}`);
	};

	const leaveRoom = () => {
		navigate(`/room/${roomId}/postmeeting`);
	};

	const handleUpdateRoomId = async (id: string, roomId: string) => {
		// console.log('handleUpdateRoomId Called');
		try {
			const response = await fetch(`${server_url}/matching/update-roomid`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id, roomId }),
			});

			const result = await response.json();
			console.log({ result });

			if (response.ok) {
				setUserData(result);
			}
		} catch (error) {
			console.error(error);
		}
	};

	// Function to send outgoing call
	const sendConnection = (peer: IPeer) => {
		// console.log({
		// 	['sendConnection']: {
		// 		['me']: !!me,
		// 		['stream']: !!stream,
		// 		['peerId']: peer.peerId !== userId,
		// 	},
		// });

		if (!me || !stream || peer?.peerId === me.id) return;
		// Make an outbound call to the new peer using their peerId and the local media stream
		// Passing data that other peers need to know as 'metadata' property
		const call = me.call(peer.peerId, stream, {
			metadata: { userName },
		});
		console.log({ call });

		// Add the new peer's name to peers state
		peersDispatch(addPeerNameAction(peer.peerId, peer.userName));

		// Add the new call/connection object to peers state
		peersDispatch(addPeerConnectionAction(peer.peerId, call));

		// Register an event listener for the peer stream
		call.on('stream', (peerStream) => {
			// Add the new peer's stream to peers state
			peersDispatch(addPeerStreamAction(peer.peerId, peerStream));
		});
	};

	// Function to answer incoming call
	const receiveConnection = (call: MediaConnection) => {
		// console.log({ ['receiveConnection']: call });

		// Update peers state with properties from metadata
		const { userName } = call.metadata;
		peersDispatch(addPeerNameAction(call.peer, userName));

		// Add the incoming call/connection to peers state
		peersDispatch(addPeerConnectionAction(call.peer, call));

		// Respond to the incoming call with the local stream
		call.answer(stream);

		// Register an event listener for the peer to send their stream
		call.on('stream', (peerStream) => {
			// Add the incoming peer's stream to peers state
			peersDispatch(addPeerStreamAction(call.peer, peerStream));
		});
	};

	// Function to update 'peers' state with the list of participants in a room
	const getUsers = ({ participants }: { participants: Record<string, IPeer> }) => {
		// console.log({ ['getUsers']: { participants } });

		// Establish a new connection with existing peers in the room
		Object.values(participants).forEach((peer: IPeer) => {
			// Make sure a connection is not already established
			if (peer.peerId in peers || peer.peerId === userId) return;
			sendConnection(peer);
		});
	};

	// Function to remove a peer from the application's state
	const removePeer = (peerId: string) => {
		// Dispatching an action to remove the peer from the state
		peersDispatch(removePeerAction(peerId));
	};

	const updateMediaStream = async ({
		videoState,
		audioState,
	}: {
		videoState: boolean;
		audioState: boolean;
	}) => {
		try {
			const newStream = await navigator.mediaDevices.getUserMedia({
				video: videoState,
				audio: audioState,
			});
			// Store the local media stream in the state
			setStream(newStream);
		} catch (error) {
			console.log(error);
		}
	};

	// Function to update the stream for local and remote peers
	const switchStream = (newStream: MediaStream) => {
		// Uses ternary operator to to update state when stop/start sharing is triggered
		// For 'false' condition, 'me?.id' could be undefined, which is not a valid type for state so it defaults to empty string
		setScreenSharingId(screenSharingId ? '' : userId || '');

		// Store the video track of newStream to update all remote peer connections
		const videoTrack = newStream.getVideoTracks()[0];

		Object.values(peers as PeersState).forEach((peer) => {
			// Make sure peer is not local peer and that local peer has a connection with peer
			if (peer.peerId === userId || !peer.connection) return;

			// Access the RTCPeerConnection between local peer and remote peer
			peer.connection.peerConnection
				// Get the RTCRtpSender that handles video streaming -> senders[0: audio, 1: video]
				.getSenders()[1]
				// Start sending newStream's videoTrack
				.replaceTrack(videoTrack)
				.catch((err: any) => console.error(err));
		});
	};

	// Function to set the user's display as their stream
	const shareScreen = () => {
		// Check if screen share is enabled
		if (screenSharingId) {
			// Enabled -> Revert local peer's media to default webcam
			navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
				switchStream(stream);
			});
		} else {
			// Not enabled -> Start screen share
			navigator.mediaDevices.getDisplayMedia({}).then((stream) => {
				switchStream(stream);
				setScreenStream(stream);
			});
		}
	};

	// useEffect hook initializes the local peer and media stream
	useEffect(() => {
		// Create a new Peer instance with userId state
		const newPeer = new Peer(userId);

		// Store the local peer instance in the state
		setMe(newPeer);

		// Sets 'stream' state on initial render
		updateMediaStream({ videoState: true, audioState: true });

		// Register event listeners for incoming websocket events
		// webSocket.on('get-users', getUsers);
		webSocket.on('user-disconnected', removePeer);
		webSocket.on('user-started-sharing', (peerId) => setScreenSharingId(peerId));
		webSocket.on('user-stopped-sharing', () => setScreenSharingId(''));

		// Unsubscribe from all events when the component ummounts to prevent memory leaks
		return () => {
			webSocket.off('room-created');
			webSocket.off('get-users');
			webSocket.off('user-disconnected');
			webSocket.off('user-started-sharing');
			webSocket.off('user-stopped-sharing');
			webSocket.off('user-joined');
			me?.disconnect();
		};
	}, []);

	// useEffect to handle new peers joining the room
	useEffect(() => {
		// console.log(
		// 	{ ['me/stream useEffect']: 'Triggered' },
		// 	{ ['me']: !!me, ['stream']: !!stream, ['me.open']: me?.open }
		// );

		// Exit if me or stream is not defined
		if (!me || !stream) return;

		// Register a Peer listener for incoming calls
		me.on('call', receiveConnection);

		// Register a Socket listener to get data for other users in the room
		webSocket.on('get-users', getUsers);

		// Register a Socket listener to connect with a new peer that joins the room
		webSocket.on('user-joined', sendConnection);

		return () => {
			webSocket.off('user-joined');
			webSocket.off('get-users');
		};
	}, [me, stream]);

	// Screen Sharing
	// Executes when a peer starts/stops sharing their screen or local peer leaves the room
	useEffect(() => {
		// Check if a peer started sharing their screen
		if (screenSharingId) {
			webSocket.emit('start-sharing', { peerId: screenSharingId, roomId });
		} else {
			webSocket.emit('stop-sharing');
		}
	}, [screenSharingId, roomId]);

	// console.log({ me });
	// console.log({ stream });
	// console.log({ userData });
	// console.log({ peers });

	// Render the RoomContext provider with websocket, peer, and stream as values
	return (
		<RoomContext.Provider
			value={{
				me,
				stream,
				screenStream,
				screenSharingId,
				peers,
				roomId,
				shareScreen,
				setRoomId,
				leaveRoom,
			}}>
			{children}
		</RoomContext.Provider>
	);
};
