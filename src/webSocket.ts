import { io } from 'socket.io-client';

// Define the URL of the WebSocket server
const webSocketUrl = import.meta.env.VITE_BACKEND_URL as string;

// Initialize/export the WebSocket client that connects to a server running at the provided URL
export const webSocket = io(webSocketUrl, {
  transports: ['websocket'],
});
