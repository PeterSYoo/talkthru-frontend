import { IMessage } from '../types/Chat';

// Define/export constants for the different action types
export const ADD_MESSAGE = 'ADD_MESSAGE' as const;
export const ADD_HISTORY = 'ADD_HISTORY' as const;
export const TOGGLE_MESSAGES = 'TOGGLE_MESSAGES' as const;
export const TOGGLE_NOTES = 'TOGGLE_NOTES' as const;

// Define/export creator functions for each action type
// These functions are used with the useReducer hook to update the state of a component
// 'type' and 'payload' describes the expected arguments when the action is dispatched
export const addMessageAction = (message: IMessage) => ({
	type: ADD_MESSAGE,
	payload: { message },
});

export const addHistoryAction = (history: IMessage[]) => ({
	type: ADD_HISTORY,
	payload: { history },
});

export const toggleMessagesAction = (isOpen: boolean) => ({
	type: TOGGLE_MESSAGES,
	payload: { isOpen },
});

export const toggleNotesAction = (isOpen: boolean) => ({
	type: TOGGLE_NOTES,
	payload: { isOpen },
});
