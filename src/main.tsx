import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoomProvider } from './contexts/RoomContext';
import './index.css';
import { SplashPage } from './pages/Splash.pages';
import { LoginPage } from './pages/Login.pages';
import { ProfilePage } from './pages/Profile.pages';
import { HomePage } from './pages/Home.pages';
import { RoomPage } from './pages/Room.pages';
import { SignUpPage } from './pages/SignUp.pages';
import { PostMeetingPage } from './pages/PostMeeting.pages';
import { WaitingRoomPage } from './pages/WaitingRoom.pages';
import { ResetPage } from './pages/Reset.pages';
import { Header } from './components/Header.components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <RoomProvider>
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/waitingroom" element={<WaitingRoomPage />} />
          <Route path="/room/:id" element={<RoomPage />} />
          <Route path="/room/:id/postmeeting" element={<PostMeetingPage />} />
        </Routes>
      </div>
    </RoomProvider>
  </BrowserRouter>
);
