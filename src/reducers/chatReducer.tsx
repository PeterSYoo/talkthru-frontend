import { ADD_MESSAGE, ADD_HISTORY, TOGGLE_MESSAGES, TOGGLE_NOTES, ADD_NOTE } from './chatActions';
import { IMessage, INote } from '../types/Chat';

// Define/export the type for the ChatState object
export type ChatState = {
	messages: IMessage[];
	notes: INote[];
	isMessagesOpen: boolean;
	isNotesOpen: boolean;
};

// Define the acceptable action object types for the ChatAction object
// These types correlate with their respective creator functions in chatActions
type ChatAction =
	| {
			type: typeof ADD_MESSAGE;
			payload: { message: IMessage };
	  }
	| {
			type: typeof ADD_NOTE;
			payload: { note: INote };
	  }
	| {
			type: typeof ADD_HISTORY;
			payload: { messagesHistory: IMessage[]; notesHistory: INote[] };
	  }
	| {
			type: typeof TOGGLE_MESSAGES;
			payload: { isOpen: boolean };
	  }
	| {
			type: typeof TOGGLE_NOTES;
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
				messages: action.payload.messagesHistory,
				notes: action.payload.notesHistory,
			};
		// Opens/closes chat messages
		case TOGGLE_MESSAGES:
			/*
			====================
			Case 1:
				notesClosed && messagesClosed
				--> notesClosed --> messagesOpen
				
			Case 2:
				notesCloseed && messagesOpen
				--> notesClosed --> messagesClosed

			Case 3:
				notesOpen	&& messagesClosed
				--> notesClosed --> messagesOpen
			
			Case 4:
				notesOpen && messagesOpen
				--> Impossible

			Conclusion ==> The opposite feature should be closed regardless of it's value in state or the payload
			====================
			*/

			return {
				...state,
				isMessagesOpen: action.payload.isOpen,
				isNotesOpen: false,
			};
		// Opens/closes chat notes
		case TOGGLE_NOTES:
			// See logic in TOGGLE_MESSAGES
			return {
				...state,
				isNotesOpen: action.payload.isOpen,
				isMessagesOpen: false,
			};
		// Return the existing state object by default
		default:
			return { ...state };
	}
};

// The useReducer hook is a way to manage state in a React function component. It provides a way to handle complex state updates, as opposed to the simpler updates handled by useState.

// The useReducer hook takes two arguments: the reducer function and the initial state. The reducer function takes the current state and an action, and returns the new state based on the action.
