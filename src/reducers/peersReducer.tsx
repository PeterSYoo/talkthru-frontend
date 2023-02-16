import { ADD_PEER_STREAM, ADD_PEER_NAME, REMOVE_PEER_STREAM, ADD_ALL_PEERS } from './peersActions';

// Define/export the type for the PeersState object
export type PeersState = Record<
	string,
	{
		peerId: string;
		stream?: MediaStream;
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
			type: typeof ADD_PEER_STREAM;
			payload: {
				peerId: string;
				stream: MediaStream;
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
			type: typeof REMOVE_PEER_STREAM;
			payload: {
				peerId: string;
			};
	  }
	| {
			type: typeof ADD_ALL_PEERS;
			payload: {
				peers: Record<string, IPeer>;
			};
	  };

// Define/export reducer that handles the PeersState object based on the action type that is dispatched
export const peersReducer = (state: PeersState, action: PeersAction) => {
	switch (action.type) {
		// Adds/updates the stream for the given peerId in state
		case ADD_PEER_STREAM:
			return {
				...state,
				[action.payload.peerId]: {
					...state[action.payload.peerId],
					stream: action.payload.stream,
				},
			};
		// Adds/updates the userName for the given peerId in state
		case ADD_PEER_NAME:
			return {
				...state,
				[action.payload.peerId]: {
					...state[action.payload.peerId],
					userName: action.payload.userName,
				},
			};
		// Removes peer object that correlates with peerId from state
		case REMOVE_PEER_STREAM:
			// Use destructuring to isolate the peer object that needs to be deleted from the other peers in state
			const { [action.payload.peerId]: deleted, ...rest } = state;
			return rest;
		// Updates state with all nonlocal peers in the room
		case ADD_ALL_PEERS:
			return { ...state, ...action.payload.peers };
		// Return the existing state object by default
		default:
			return { ...state };
	}
};

// The useReducer hook is a way to manage state in a React function component. It provides a way to handle complex state updates, as opposed to the simpler updates handled by useState.

// The useReducer hook takes two arguments: the reducer function and the initial state. The reducer function takes the current state and an action, and returns the new state based on the action.
