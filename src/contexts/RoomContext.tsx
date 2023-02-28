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
	const [peers, dispatch] = useReducer(peersReducer, {});
	// State to keep track of the room ID for the local peer
	const [roomId, setRoomId] = useState<string>('');
	const [matchedUserId, setMatchedUserId] = useState<any>();

	// Destructure context for the props we need
	const { name: userName, id: userId } = useContext(UserContext);

	// Function to join a room when room is created or when a user is matched
	const enterRoom = ({ roomId }: { roomId: string }) => {
		webSocket.emit('join-room', { roomId, userId, userName });

		webSocket.once('room-ready', (participants: IPeer[]) => {
			const otherUser = participants.find((user) => user.peerId !== userId);
			setMatchedUserId(otherUser?.peerId);

			// API CALL FOR USER DATA

			setTimeout(() => {
				navigate(`/room/${roomId}`);
			}, 3000);
		});

		// webSocket.once('room-ready', ({ participants }: { participants: Record<string, IPeer> }) => {
		// 	getUsers({ participants });
		// });

		// const otherUser = participants.find((user) => user.peerId !== userId);
		// setMatchedUserId(otherUser?.peerId);

		// setTimeout(() => {
		// 	navigate(`/room/${roomId}`);
		// }, 3000);
	};

	// Function to send outgoing call
	const sendConnection = (peer: IPeer) => {
		if (!me || !stream) return;

		// Make an outbound call to the new peer using their peerId and the local media stream
		// Passing data that other peers need to know as 'metadata' property
		const call = me.call(peer.peerId, stream, {
			metadata: { userName },
		});

		// Register an event listener for the peer stream
		call.on('stream', (peerStream) => {
			// Add the new peer's stream to peers state
			dispatch(addPeerStreamAction(peer.peerId, peerStream));
		});

		// Add the new peer's name to peers state
		dispatch(addPeerNameAction(peer.peerId, peer.userName));

		// Add the new call/connection object to peers state
		dispatch(addPeerConnectionAction(peer.peerId, call));
	};

	// Function to answer incoming call
	const receiveConnection = (call: MediaConnection) => {
		// Update peers state with properties from metadata
		const { userName } = call.metadata;
		dispatch(addPeerNameAction(call.peer, userName));

		// Add the incoming call/connection to peers state
		dispatch(addPeerConnectionAction(call.peer, call));

		// Respond to the incoming call with the local stream
		call.answer(stream);

		// Register an event listener for the peer to send their stream
		call.on('stream', (peerStream) => {
			// Add the incoming peer's stream to peers state
			dispatch(addPeerStreamAction(call.peer, peerStream));
		});
	};

	// Function to update 'peers' state with the list of participants in a room
	const getUsers = ({ participants }: { participants: Record<string, IPeer> }) => {
		if (!me || !stream) return;

		// Establish a new connection with existing peers in the room
		Object.values(participants).forEach((peer: IPeer) => {
			// Make sure a connection is not already established
			if (peer.peerId in peers) return;

			sendConnection(peer);
		});

		// Listen for incoming calls
		me.on('call', receiveConnection);
	};

	// Function to remove a peer from the application's state
	const removePeer = (peerId: string) => {
		// Dispatching an action to remove the peer from the state
		dispatch(removePeerAction(peerId));
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
		const peer = new Peer(userId);

		// Store the local peer instance in the state
		setMe(peer);

		try {
			// Try to get the local media stream for audio and video
			navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
				// Store the local media stream in the state
				setStream(stream);
			});
		} catch (error) {
			// Log the error if getting the media stream fails
			console.log(error);
		}

		// Register event listeners for incoming websocket events
		webSocket.on('room-created', enterRoom);
		webSocket.on('get-users', getUsers);
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

	// useEffect to handle new peers joining the room
	useEffect(() => {
		// Exit if me or stream is not defined
		if (!me) return;
		if (!stream) return;

		// Register an event listener for a new peer joining the room
		webSocket.on('user-joined', sendConnection);

		// Register an event listener for incoming calls
		me.on('call', receiveConnection);

		return () => {
			webSocket.off('user-joined');
		};
	}, [me, stream, userName]);

	console.log({ me });
	console.log({ stream });
	console.log({ roomId });
	console.log({ peers });

	// Render the RoomContext provider with websocket, peer, and stream as values
	return (
		<RoomContext.Provider
			value={{
				stream,
				screenStream,
				screenSharingId,
				peers,
				roomId,
				matchedUserId,
				shareScreen,
				setRoomId,
				enterRoom,
			}}>
			{children}
		</RoomContext.Provider>
	);
};
