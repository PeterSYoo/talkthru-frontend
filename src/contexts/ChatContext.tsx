import { createContext, useEffect, useReducer } from 'react';
import { webSocket } from '../webSocket';
import {
	addMessageAction,
	addNoteAction,
	addHistoryAction,
	toggleMessagesAction,
	toggleNotesAction,
} from '../reducers/chatActions';
import { chatReducer } from '../reducers/chatReducer';
import { IMessage, INote } from '../types/Chat';

// Create a context for sharing data across components
export const ChatContext = createContext<null | any>(null);

// Chat provider component to manage state and provide context
export const ChatProvider = ({ children }: { children: any }) => {
	// State to keep track of chat messages for a room
	const [chat, chatDispatch] = useReducer(chatReducer, {
		messages: [],
		notes: [],
		isMessagesOpen: false,
		isNotesOpen: false,
	});

	// Function to emit chat message to websocket server when onSubmit triggers in ChatInput
	const sendMessage = (message: string, roomId: string, authorId: string) => {
		// Construct new IMessage object
		const messageData: IMessage = {
			content: message,
			timestamp: new Date().getTime(),
			authorId,
		};

		// Update chat state
		chatDispatch(addMessageAction(messageData));

		// Emit event with data
		webSocket.emit('send-message', roomId, messageData);
	};

	const sendNote = (note: string, roomId: string, authorId: string) => {
		const noteData: INote = {
			content: note,
			timestamp: new Date().getTime(),
			authorId,
		};

		chatDispatch(addNoteAction(noteData));

		webSocket.emit('send-note', roomId, noteData);
	};

	// Function to update chat state with a new message
	const addMessage = (message: IMessage) => {
		chatDispatch(addMessageAction(message));
	};

	// Function to update chat state with old messages for new peers
	const addHistory = (messages: IMessage[]) => {
		chatDispatch(addHistoryAction(messages));
	};

	// Function to open/close chat messages onClick
	const toggleMessages = () => {
		chatDispatch(toggleMessagesAction(!chat.isMessagesOpen));
	};

	// Function to open/close chat notes onClick
	const toggleNotes = () => {
		chatDispatch(toggleNotesAction(!chat.isNotesOpen));
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
		<ChatContext.Provider value={{ chat, sendMessage, toggleMessages, toggleNotes }}>
			{children}
		</ChatContext.Provider>
	);
};
