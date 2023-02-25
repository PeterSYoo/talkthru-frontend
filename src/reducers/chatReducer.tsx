import { ADD_MESSAGE, ADD_HISTORY, TOGGLE_CHAT } from './chatActions';
import { IMessage } from '../types/Chat';

// Define/export the type for the ChatState object
export type ChatState = {
	messages: IMessage[];
	isChatOpen: boolean;
};

// Define the acceptable action object types for the ChatAction object
// These types correlate with their respective creator functions in chatActions
type ChatAction =
	| {
			type: typeof ADD_MESSAGE;
			payload: { message: IMessage };
	  }
	| {
			type: typeof ADD_HISTORY;
			payload: { history: IMessage[] };
	  }
	| {
			type: typeof TOGGLE_CHAT;
			payload: { isOpen: boolean };
	  };

// Define/export reducer that handles the ChatState object based on the action type that is dispatched
export const chatReducer = (state: ChatState, action: ChatAction) => {
	switch (action.type) {
		// Adds the new message to state
		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, action.payload.message],
			};
		// Updates state with the chat history from websocket server
		case ADD_HISTORY:
			return {
				...state,
				messages: action.payload.history,
			};
		// Updates state when chat is opened/closed
		case TOGGLE_CHAT:
			return {
				...state,
				isChatOpen: action.payload.isOpen,
			};
		// Return the existing state object by default
		default:
			return { ...state };
	}
};

// The useReducer hook is a way to manage state in a React function component. It provides a way to handle complex state updates, as opposed to the simpler updates handled by useState.

// The useReducer hook takes two arguments: the reducer function and the initial state. The reducer function takes the current state and an action, and returns the new state based on the action.
