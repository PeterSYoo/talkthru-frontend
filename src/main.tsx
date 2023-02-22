import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { RoomProvider } from './contexts/RoomContext';
import { PageRoutes } from './PageRoutes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <UserProvider>
      <RoomProvider>
        <PageRoutes />
      </RoomProvider>
    </UserProvider>
  </BrowserRouter>
);
