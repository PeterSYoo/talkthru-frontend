import { io } from 'socket.io-client';

// Define the URL of the WebSocket server
const webSocketUrl = 'https://talkthru-backend.herokuapp.com/';

// Initialize/export the WebSocket client that connects to a server running at the provided URL
export const webSocket = io(webSocketUrl);
