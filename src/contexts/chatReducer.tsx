import { ADD_MESSAGE, ADD_HISTORY } from './chatActions';

// Type definition for a message
interface IMessage {
  content: string;
  author?: string;
  timestamp: number;
}

// Define the type of the ChatState object
export type ChatState = {
  messages: IMessage[];
};

// Define the type of the ChatAction object, which is a union of two different action objects
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
    };

// Exports the chatReducer function, which is a reducer that updates the ChatState object
export const chatReducer = (state: ChatState, action: ChatAction) => {
  switch (action.type) {
    // Handle the ADD_MESSAGE action type
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload.message]
      };
    // Handle the ADD_HISTORY action type
    case ADD_HISTORY:
      return {
        ...state,
        messages: action.payload.history,
      };
    // Return the existing state object by default
    default:
      return { ...state };
  }
};

// The useReducer hook is a way to manage state in a React function component. It provides a way to handle complex state updates, as opposed to the simpler updates handled by useState.

// The useReducer hook takes two arguments: the reducer function and the initial state. The reducer function takes the current state and an action, and returns the new state based on the action.
