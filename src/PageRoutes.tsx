import { Route, Routes, useLocation } from 'react-router-dom';
import { ChatProvider } from './contexts/ChatContext';
import { LandingPage } from './pages/Landing.pages';
import { LoginPage } from './pages/Login.pages';
import { ProfilePage } from './pages/Profile.pages';
import { HomePage } from './pages/Home.pages';
import { RoomPage } from './pages/Room.pages';
import { SignUpPage } from './pages/SignUp.pages';
import { PostMeetingPage } from './pages/PostMeeting.pages';
import { PreMeetingPage } from './pages/PreMeeting.pages';
import { ResetPage } from './pages/Reset.pages';
import { Header } from './components/Header.components';

export const PageRoutes = () => {
  const location = useLocation();
  const isNotRoot = location.pathname !== '/';

  return (
    <div
      className={`${
        isNotRoot && 'grid grid-rows-[88px_1fr] h-screen'
      } font-poppins`}
    >
      {isNotRoot && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/premeet" element={<PreMeetingPage />} />
        <Route
          path="/room/:id"
          element={
            <ChatProvider>
              <RoomPage />
            </ChatProvider>
          }
        />
        <Route path="/room/:id/postmeeting" element={<PostMeetingPage />} />
      </Routes>
    </div>
  );
};
