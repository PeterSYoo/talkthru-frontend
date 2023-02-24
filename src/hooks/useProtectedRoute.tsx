import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useProtectedRoute = (Component: any) => {
  const ProtectedRoute = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
      const authenticate = async () => {
        try {
          const token = localStorage.getItem('token');
          if (token) {
            // Verify the token on the server side
            const response = await fetch('/api/verify', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const data = await response.json();
            if (data.status === 'success') {
              setIsAuthenticated(true);
            } else {
              setIsAuthenticated(false);
              navigate('/login'); // Redirect to the login page
            }
          } else {
            setIsAuthenticated(false);
            navigate('/login'); // Redirect to the login page
          }
        } catch (error) {
          console.error(error);
        }
      };
      authenticate();
    }, [navigate]);

    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      navigate('/login');
      return null;
    }

    return (
      <>
        <Component {...props} />
      </>
    );
  };

  return ProtectedRoute;
};
