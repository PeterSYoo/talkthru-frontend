import { ADD_PEER, REMOVE_PEER } from './peersActions';

// Define the type of the PeerState object
export type PeersState = Record<string, { stream: MediaStream }>;

// Define the type of the PeerAction object, which is a union of two different action objects
type PeersAction =
  | {
      // Action object with type ADD_PEER and payload object with properties peerId and stream
      type: typeof ADD_PEER;
      payload: {
        peerId: string;
        stream: MediaStream;
      };
    }
  | {
      // Action object with type REMOVE_PEER and payload object with property peerId
      type: typeof REMOVE_PEER;
      payload: {
        peerId: string;
      };
    };

// Export the peersReducer function, which is a reducer that updates the PeerState object
export const peersReducer = (state: PeersState, action: PeersAction) => {
  switch (action.type) {
    // Handle the ADD_PEER action type
    case ADD_PEER:
      return {
        // Spread the existing state object and add a new key-value pair
        ...state,
        [action.payload.peerId]: {
          // The value is an object with a single property stream equal to the stream from the payload
          stream: action.payload.stream,
        },
      };
    // Handle the REMOVE_PEER action type
    case REMOVE_PEER:
      // Destructure the existing state object and remove the key-value pair associated with the peerId from the payload
      const { [action.payload.peerId]: deleted, ...rest } = state;
      return rest;
    // Return the existing state object by default
    default:
      return { ...state };
  }
};

// The useReducer hook is a way to manage state in a React function component. It provides a way to handle complex state updates, as opposed to the simpler updates handled by useState.

// The useReducer hook takes two arguments: the reducer function and the initial state. The reducer function takes the current state and an action, and returns the new state based on the action.
