import { MediaConnection } from 'peerjs';
import {
	ADD_PEER_CONNECTION,
	ADD_PEER_STREAM,
	SET_PEER_VIDEO,
	SET_PEER_AUDIO,
	ADD_PEER_NAME,
	ADD_ALL_PEERS,
	REMOVE_PEER,
} from './peersActions';

// Define/export the type for the PeersState object
export type PeersState = Record<
	string,
	{
		peerId: string;
		connection?: MediaConnection;
		stream?: MediaStream;
		videoEnabled?: boolean;
		audioEnabled?: boolean;
		userName?: string;
	}
>;

interface IPeer {
	userName: string;
	peerId: string;
}

// Define the acceptable action object types for the PeersAction object
// These types correlate with their respective creator functions in peersActions
type PeersAction =
	| {
			type: typeof ADD_PEER_CONNECTION;
			payload: {
				peerId: string;
				connection: MediaConnection;
			};
	  }
	| {
			type: typeof ADD_PEER_STREAM;
			payload: {
				peerId: string;
				stream: MediaStream;
			};
	  }
	| {
			type: typeof SET_PEER_VIDEO;
			payload: {
				peerId: string;
				videoEnabled: boolean;
			};
	  }
	| {
			type: typeof SET_PEER_AUDIO;
			payload: {
				peerId: string;
				audioEnabled: boolean;
			};
	  }
	| {
			type: typeof ADD_PEER_NAME;
			payload: {
				peerId: string;
				userName: string;
			};
	  }
	| {
			type: typeof ADD_ALL_PEERS;
			payload: {
				peers: Record<string, IPeer>;
			};
	  }
	| {
			type: typeof REMOVE_PEER;
			payload: {
				peerId: string;
			};
	  };

// Define/export reducer that handles the PeersState object based on the action type that is dispatched
export const peersReducer = (state: PeersState, action: PeersAction) => {
	switch (action.type) {
		// Adds/updates the stream for the given peerId in state
		case ADD_PEER_CONNECTION:
			return {
				...state,
				[action.payload.peerId]: {
					...state[action.payload.peerId],
					peerId: action.payload.peerId,
					connection: action.payload.connection,
					stream: action.payload.connection.localStream,
					videoEnabled: action.payload.connection.localStream.getVideoTracks().length > 0,
					audioEnabled: action.payload.connection.localStream.getAudioTracks().length > 0,
				},
			};
		// Adds/updates the stream for the given peerId in state
		case ADD_PEER_STREAM:
			return {
				...state,
				[action.payload.peerId]: {
					...state[action.payload.peerId],
					stream: action.payload.stream,
					videoEnabled: action.payload.stream.getVideoTracks().length > 0,
					audioEnabled: action.payload.stream.getAudioTracks().length > 0,
				},
			};
		// Toggles the peer's videoEnabled property
		case SET_PEER_VIDEO:
			// Use destructuring to isolate the peer object that needs modified
			return {
				...state,
				[action.payload.peerId]: {
					...state[action.payload.peerId],
					videoEnabled: action.payload.videoEnabled,
				},
			};
		// Manages the peer's audioEnabled property
		case SET_PEER_AUDIO:
			return {
				...state,
				[action.payload.peerId]: {
					...state[action.payload.peerId],
					audioEnabled: action.payload.audioEnabled,
				},
			};
		// Adds/updates the userName for the given peerId in state
		case ADD_PEER_NAME:
			return {
				...state,
				[action.payload.peerId]: {
					...state[action.payload.peerId],
					peerId: action.payload.peerId,
					userName: action.payload.userName,
				},
			};
		// Updates state with all nonlocal peers in the room
		case ADD_ALL_PEERS:
			return { ...state, ...action.payload.peers };
		// Removes a peer from state
		case REMOVE_PEER:
			const { [action.payload.peerId]: removed, ...rest } = state;
			// Close the connection to the peer before removing peer from state
			removed?.connection && removed.connection.close();

			return rest;
		// Return the existing state object by default
		default:
			return { ...state };
	}
};

// The useReducer hook is a way to manage state in a React function component. It provides a way to handle complex state updates, as opposed to the simpler updates handled by useState.

// The useReducer hook takes two arguments: the reducer function and the initial state. The reducer function takes the current state and an action, and returns the new state based on the action.
