import { ADD_PEER_STREAM, ADD_PEER_NAME, REMOVE_PEER_STREAM } from './peersActions';

// Define/export the type for the PeersState object
export type PeersState = Record<
	string,
	{
		peerId: string;
		stream?: MediaStream;
		userName?: string;
	}
>;

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
	  };

// Define/export reducer that manages the PeersState object
export const peersReducer = (state: PeersState, action: PeersAction) => {
	// Switch statement to handle each action type and payload differently
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
			// Use destructuring to isolate the peer object that needs to be removed from the other peers in state
			const { [action.payload.peerId]: deleted, ...rest } = state;
			return rest;
		// Return the existing state object by default
		default:
			return { ...state };
	}
};

// The useReducer hook is a way to manage state in a React function component. It provides a way to handle complex state updates, as opposed to the simpler updates handled by useState.

// The useReducer hook takes two arguments: the reducer function and the initial state. The reducer function takes the current state and an action, and returns the new state based on the action.
