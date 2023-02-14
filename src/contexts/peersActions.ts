// Define/export constants for the different action types
export const ADD_PEER_STREAM = 'ADD_PEER_STREAM' as const;
export const ADD_PEER_NAME = 'ADD_PEER_NAME' as const;
export const REMOVE_PEER_STREAM = 'REMOVE_PEER_STREAM' as const;

// Action creator function for adding a peer
export const addPeerStreamAction = (peerId: string, stream: MediaStream) => ({
  // The action type
  type: ADD_PEER_STREAM,
  // The action payload with the peerId and stream
  payload: { peerId, stream },
});

// Action creator function for adding a peer
export const addPeerNameAction = (peerId: string, userName: string) => ({
  // The action type
  type: ADD_PEER_NAME,
  // The action payload with the peerId and stream
  payload: { peerId, userName },
});

// Action creator function for removing a peer
export const removePeerStreamAction = (peerId: string) => ({
  // The action type
  type: REMOVE_PEER_STREAM,
  // The action payload with the peerId
  payload: { peerId },
});

// The actions created above, addPeerAction and removePeerAction, can be used with the useReducer hook to update the state in your component. When you dispatch an action using useReducer, the reducer function will receive the current state and the action, and return the new state based on the type of the action and its payload.
