import { Route, Routes, useLocation } from 'react-router-dom';
import { RoomProvider } from './contexts/RoomContext';
import { ChatProvider } from './contexts/ChatContext';
import { LandingPage } from './pages/Landing.pages';
import { LoginPage } from './pages/Login.pages';
import { ProfilePage } from './pages/Profile.pages';
import { HomePage } from './pages/Home.pages';
import { RoomPage } from './pages/Room.pages';
import { SignUpPage } from './pages/SignUp.pages';
import { PostMeetingPage } from './pages/PostMeeting.pages';
import { MatchMePage } from './pages/MatchMe.pages';
import { ResetPage } from './pages/Reset.pages';
import { Header } from './components/header/Header.components';
import { SettingsPage } from './pages/Settings.pages';
import { AboutPage } from './pages/About.pages';
import { useProtectedRoute } from './hooks/useProtectedRoute';

export const PageRoutes = () => {
	const location = useLocation();
	const isNotRoot = location.pathname !== '/';

	const ProtectedMatchMePage = useProtectedRoute(MatchMePage);
	const ProtectedProfilePage = useProtectedRoute(ProfilePage);
	const ProtectedSettingsPage = useProtectedRoute(SettingsPage);

	return (
		<div className={`${isNotRoot && 'grid h-screen grid-rows-[92px_1fr]'} font-poppins`}>
			{isNotRoot && <Header />}
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/reset' element={<ResetPage />} />
				<Route path='/profile/' element={<ProtectedProfilePage />} />
				<Route path='/profile/:id' element={<ProfilePage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/settings' element={<ProtectedSettingsPage />} />
			</Routes>
			<RoomProvider>
				<Routes>
					<Route path='/match-me' element={<ProtectedMatchMePage />} />
					<Route
						path='/room/:id'
						element={
							<ChatProvider>
								<RoomPage />
							</ChatProvider>
						}
					/>
					<Route path='/room/:id/postmeeting' element={<PostMeetingPage />} />
				</Routes>
			</RoomProvider>
		</div>
	);
};
