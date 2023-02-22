import { createContext, useEffect, useState, useReducer } from 'react';
import { v4 as uuidV4 } from 'uuid';

// Create a context for sharing data across components
export const UserContext = createContext<null | any>(null);

// Room provider component to manage state and provide context
export const UserProvider = ({ children }: { children: any }) => {
	// User states
	const [userId] = useState(localStorage.getItem('userId') || uuidV4());
	// TEMP DATA -> REMOVE BEFORE PUSH
	const [userName, setUserName] = useState(
		localStorage.getItem('userName') || `User${Math.floor(Math.random() * 1000)}`
	);

	// Updates localstorage anytime `userName` state changes
	useEffect(() => {
		localStorage.setItem('userName', userName);
	}, [userName]);

	// Updates localstorage anytime `userId` state changes
	useEffect(() => {
		localStorage.setItem('userId', userId);
	}, [userId]);

	return (
		<UserContext.Provider value={{ userId, userName, setUserName }}>
			{children}
		</UserContext.Provider>
	);
};
