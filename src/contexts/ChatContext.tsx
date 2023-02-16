import { createContext, useEffect, useReducer } from 'react';
import { webSocket } from '../webSocket';
import { addMessageAction, addHistoryAction, toggleChatAction } from '../reducers/chatActions';
import { chatReducer } from '../reducers/chatReducer';

// Type definition for a message
interface IMessage {
	content: string;
	author?: string;
	timestamp: number;
}

// Create a context for sharing data across components
export const ChatContext = createContext<null | any>(null);

// Chat provider component to manage state and provide context
export const ChatProvider = ({ children }: { children: any }) => {
	// State to keep track of chat messages for a room
	const [chat, chatDispatch] = useReducer(chatReducer, {
		messages: [],
		isChatOpen: false,
	});

	// Function to emit chat message to websocket server when onSubmit triggers in ChatInput
	const sendMessage = (message: string, roomId: string, author: string) => {
		// Construct new IMessage object
		const messageData: IMessage = {
			content: message,
			timestamp: new Date().getTime(),
			author,
		};

		// Update chat state
		chatDispatch(addMessageAction(messageData));

		// Emit event with data
		webSocket.emit('send-message', roomId, messageData);
	};

	// Function to update chat state with a new message
	const addMessage = (message: IMessage) => {
		chatDispatch(addMessageAction(message));
	};

	// Function to update chat state with old messages for new peers
	const addHistory = (messages: IMessage[]) => {
		chatDispatch(addHistoryAction(messages));
	};

	// Function to update chat state to the opposite of what it currently is
	const toggleChat = () => {
		chatDispatch(toggleChatAction(!chat.isChatOpen));
	};

	// Handles event listeners
	useEffect(() => {
		webSocket.on('add-message', addMessage);
		webSocket.on('get-messages', addHistory);

		// Unsubscribe from listeners to prevent memory leaks
		return () => {
			webSocket.off('add-message');
			webSocket.off('get-messages');
		};
	}, []);

	return (
		<ChatContext.Provider value={{ chat, sendMessage, toggleChat }}>
			{children}
		</ChatContext.Provider>
	);
};
