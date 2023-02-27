import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { PageRoutes } from './PageRoutes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<UserProvider>
			<PageRoutes />
		</UserProvider>
	</BrowserRouter>
);
