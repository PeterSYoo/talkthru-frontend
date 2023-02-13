// Type definition for a message
interface IMessage {
  content: string;
  author?: string;
  timestamp: number;
}

// Define/export constants for each action type
export const ADD_MESSAGE = 'ADD_MESSAGE' as const;
export const ADD_HISTORY = 'ADD_HISTORY' as const;
export const TOGGLE_CHAT = 'TOGGLE_CHAT' as const;

// Action creator function for adding a chat message
export const addMessageAction = (message: IMessage) => ({
  // The action type
  type: ADD_MESSAGE,
  // The action payload with the chat message
  payload: { message },
});

// Action creator function for adding the chat history
export const addHistoryAction = (history: IMessage[]) => ({
  // The action type
  type: ADD_HISTORY,
  // The action payload with the chat history
  payload: { history },
});

// Action creator function for toggling between an open or closed chat
export const toggleChatAction = (isOpen: boolean) => ({
  type: TOGGLE_CHAT,
  payload: { isOpen },
});

// The actions created above can be used with the useReducer hook to update the state in your component. When you dispatch an action using useReducer, the reducer function will receive the current state and the action, and return the new state based on the type of the action and its payload.
