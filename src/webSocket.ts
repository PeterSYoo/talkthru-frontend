import { io } from 'socket.io-client';

// Define the URL of the WebSocket server
const webSocketUrl = 'http://localhost:8080';

// Initialize/export the WebSocket client that connects to a server running at the provided URL
export const webSocket = io(webSocketUrl);
