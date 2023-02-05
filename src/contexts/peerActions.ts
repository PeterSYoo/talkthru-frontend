// Action type constant for adding a peer
export const ADD_PEER = 'ADD_PEER' as const;

// Action type constant for removing a peer
export const REMOVE_PEER = 'REMOVE_PEER' as const;

// Action creator function for adding a peer
export const addPeerAction = (peerId: string, stream: MediaStream) => ({
  // The action type
  type: ADD_PEER,
  // The action payload with the peerId and stream
  payload: { peerId, stream },
});

// Action creator function for removing a peer
export const removePeerAction = (peerId: string) => ({
  // The action type
  type: REMOVE_PEER,
  // The action payload with the peerId
  payload: { peerId },
});

// The actions created above, addPeerAction and removePeerAction, can be used with the useReducer hook to update the state in your component. When you dispatch an action using useReducer, the reducer function will receive the current state and the action, and return the new state based on the type of the action and its payload.
