import { createContext, useState } from 'react';

// Set the URL of the backend server
const server_url = import.meta.env.VITE_BACKEND_URL as string;

// Create a context for sharing data across components
export const UserContext = createContext<null | any>(null);

// Room provider component to manage state and provide context
export const UserProvider = ({ children }: { children: any }) => {
	const [userData, setUserData] = useState<any>({});
	const { id, name, subject, expertise, matching } = userData;

	const handleFetchUserData = async () => {
		try {
			const token = localStorage.getItem('token');
			if (!token) {
				// console.log('Token not found');
				return;
			}
			const response = await fetch(`${server_url}/user`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const result = await response.json();
			if (response.ok) {
				setUserData(result);
				// console.log(result);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<UserContext.Provider
			value={{
				userData,
				setUserData,
				handleFetchUserData,
				userId: id,
				userName: name,
				subject,
				expertise,
				matching,
			}}>
			{children}
		</UserContext.Provider>
	);
};
