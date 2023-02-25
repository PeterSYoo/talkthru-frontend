import { useState } from 'react';
import { ChooseExpertise } from '../components/match-me/ChooseExpertise.components';
import { ChooseSubject } from '../components/match-me/ChooseSubject.components';
import { LookingForUser } from '../components/match-me/LookingForUser.components';

// Set the URL of the backend server
const server_url = import.meta.env.VITE_BACKEND_URL as string;

export const MatchMePage = () => {
  const [subject, setSubject] = useState<string>('');
  const [expertise, setExpertise] = useState<string>('');
  const [userData, setUserData] = useState<any>({});

  const handleFetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('Token not found');
        return;
      }
      const response = await fetch(`${server_url}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) {
        setUserData(result);
        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {/* Fetch user Data test */}
      <div className="flex flex-col items-center justify-center pt-10">
        <div>
          <button
            onClick={() => handleFetchUserData()}
            className="rounded-lg border border-gray-700 p-3"
          >
            Fetch Data
          </button>
        </div>
        <p>User Id: {userData.id}</p>
      </div>
      {/*  */}
      <div className="h-screen w-full">
        {/* Choose a Subject */}
        {subject === '' && <ChooseSubject setSubject={setSubject} />}
        {/* Choose Expertise */}
        {expertise === '' && (
          <>
            {subject === 'Business' && (
              <ChooseExpertise
                subject={subject}
                setSubject={setSubject}
                expertise={expertise}
                setExpertise={setExpertise}
              />
            )}
            {subject === 'Nursing' && (
              <ChooseExpertise
                subject={subject}
                setSubject={setSubject}
                expertise={expertise}
                setExpertise={setExpertise}
              />
            )}
            {subject === 'Biomedical Sciences' && (
              <ChooseExpertise
                subject={subject}
                setSubject={setSubject}
                expertise={expertise}
                setExpertise={setExpertise}
              />
            )}
            {subject === 'Biology' && (
              <ChooseExpertise
                subject={subject}
                setSubject={setSubject}
                expertise={expertise}
                setExpertise={setExpertise}
              />
            )}
          </>
        )}

        {/* Looking for User */}
        {expertise !== '' && (
          <LookingForUser setExpertise={setExpertise} subject={subject} />
        )}
      </div>
    </>
  );
};
