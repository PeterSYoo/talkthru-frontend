import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, logout } from '../firebase';
import { query, getDocs, collection, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { CreateButton } from '../components/CreateButton.components';

export const HomePage = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();


  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
  }, [user, loading]);

  return (
    <>
      <div className="w-full h-full bg-blue-100 flex flex-col justify-center items-center">
        <h3>Logged in as {user?.email}</h3>
        <CreateButton />
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};
