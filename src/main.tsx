import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoomProvider } from './contexts/RoomContext';
import './index.css';
import { HomePage } from './pages/Home.pages';
import { RoomPage } from './pages/Room.pages';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoomProvider>
        <div className="h-screen w-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/room/:id" element={<RoomPage />} />
          </Routes>
        </div>
      </RoomProvider>
    </BrowserRouter>
  </React.StrictMode>
);
