import { ADD_MESSAGE, ADD_HISTORY, TOGGLE_CHAT } from './chatActions';

// Type definition for a message
interface IMessage {
  content: string;
  author?: string;
  timestamp: number;
}

// Define the type of the ChatState object
export type ChatState = {
  messages: IMessage[];
  isChatOpen: boolean;
};

// Define the type of the ChatAction object, which is a union of the different available action objects
type ChatAction =
  | {
      // Action object with type ADD_MESSAGE and payload object with property message
      type: typeof ADD_MESSAGE;
      payload: { message: IMessage };
    }
  | {
      // Action object with type ADD_HISTORY and payload object with property history
      type: typeof ADD_HISTORY;
      payload: { history: IMessage[] };
    }
  | {
    // Action object with type TOGGLE_CHAT and payload object with property isOpen
    type: typeof TOGGLE_CHAT;
    payload: { isOpen: boolean };
  };

// Exports the chatReducer function, which is a reducer that updates the ChatState object
export const chatReducer = (state: ChatState, action: ChatAction) => {
  // Uses switch statement to handle the different action types
  switch (action.type) {
    case ADD_MESSAGE:
      // Updates state with the a new message
      return {
        ...state,
        messages: [...state.messages, action.payload.message]
      };
    case ADD_HISTORY:
      // Updates state with a room's chat history
      return {
        ...state,
        messages: action.payload.history,
      };
    case TOGGLE_CHAT:
      // Updates state to open/close chat
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
