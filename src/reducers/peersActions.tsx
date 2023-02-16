// Define/export constants for the different action types
export const ADD_PEER_STREAM = 'ADD_PEER_STREAM' as const;
export const REMOVE_PEER_STREAM = 'REMOVE_PEER_STREAM' as const;
export const ADD_PEER_NAME = 'ADD_PEER_NAME' as const;
export const ADD_ALL_PEERS = 'ADD_ALL_PEERS' as const;

interface IPeer {
	userName: string;
	peerId: string;
}

// Define/export creator functions for each action type
// These functions are used with the useReducer hook to update the state of a component
// 'type' and 'payload' describes the expected arguments when the action is dispatched
export const addPeerStreamAction = (peerId: string, stream: MediaStream) => ({
	type: ADD_PEER_STREAM,
	payload: { peerId, stream },
});

export const addPeerNameAction = (peerId: string, userName: string) => ({
	type: ADD_PEER_NAME,
	payload: { peerId, userName },
});

export const removePeerStreamAction = (peerId: string) => ({
	type: REMOVE_PEER_STREAM,
	payload: { peerId },
});

export const addAllPeersAction = (peers: Record<string, IPeer>) => ({
	type: ADD_ALL_PEERS,
	payload: { peers },
});