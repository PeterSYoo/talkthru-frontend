import { MediaConnection } from 'peerjs';

// Define/export constants for the different action types
export const ADD_PEER_CONNECTION = 'ADD_PEER_CONNECTION' as const;
export const ADD_PEER_STREAM = 'ADD_PEER_STREAM' as const;
export const SET_PEER_VIDEO = 'SET_PEER_VIDEO' as const;
export const SET_PEER_AUDIO = 'SET_PEER_AUDIO' as const;
export const ADD_PEER_NAME = 'ADD_PEER_NAME' as const;
export const ADD_ALL_PEERS = 'ADD_ALL_PEERS' as const;
export const REMOVE_PEER = 'REMOVE_PEER' as const;

interface IPeer {
	userName: string;
	peerId: string;
}

// Define/export creator functions for each action type
// These functions are used with the useReducer hook to update the state of a component
// 'type' and 'payload' describes the expected arguments when the action is dispatched
export const addPeerConnectionAction = (peerId: string, connection: MediaConnection) => ({
	type: ADD_PEER_CONNECTION,
	payload: { peerId, connection },
});

export const addPeerStreamAction = (peerId: string, stream: MediaStream) => ({
	type: ADD_PEER_STREAM,
	payload: { peerId, stream },
});

export const setPeerVideoAction = (peerId: string, videoEnabled: boolean) => ({
	type: SET_PEER_VIDEO,
	payload: { peerId, videoEnabled },
});

export const setPeerAudioAction = (peerId: string, audioEnabled: boolean) => ({
	type: SET_PEER_AUDIO,
	payload: { peerId, audioEnabled },
});

export const addPeerNameAction = (peerId: string, userName: string) => ({
	type: ADD_PEER_NAME,
	payload: { peerId, userName },
});

export const addAllPeersAction = (peers: Record<string, IPeer>) => ({
	type: ADD_ALL_PEERS,
	payload: { peers },
});

export const removePeerAction = (peerId: string) => ({
	type: REMOVE_PEER,
	payload: { peerId },
});
