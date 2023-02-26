import { useContext, useState } from 'react';
import { ChooseExpertise } from '../components/match-me/ChooseExpertise.components';
import { ChooseSubject } from '../components/match-me/ChooseSubject.components';
import { LookingForUser } from '../components/match-me/LookingForUser.components';
import { UserContext } from '../contexts/UserContext';

// Set the URL of the backend server
const server_url = import.meta.env.VITE_BACKEND_URL as string;

export const MatchMePage = () => {
  const [subject, setSubject] = useState<string>('');
  const [expertise, setExpertise] = useState<string>('');
  const { userId } = useContext(UserContext);
  const [userSubject, setUserSubject] = useState<string>('');
  const [userExpertise, setUserExpertise] = useState<string>('');

  const handleUpdateSubject = async (id: number, subject: string) => {
    try {
      const response = await fetch(`${server_url}/matching/choose-subject`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          subject,
        }),
      });
      const result = await response.json();

      if (response.ok) {
        setUserSubject(result.subject);
        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateExpertise = async (id: number, expertise: string) => {
    try {
      const response = await fetch(`${server_url}/matching/choose-expertise`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          expertise,
        }),
      });
      const result = await response.json();

      if (response.ok) {
        setUserExpertise(result.expertise);
        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Demo for updating user subject and expertise on backend */}
      <div className="mx-auto mt-5 grid grid-rows-[1fr_1fr] justify-center gap-5 rounded-lg border border-gray-400 p-3">
        <div className="grid grid-cols-[1fr_1fr] gap-20">
          <button
            onClick={() => handleUpdateSubject(userId, 'Computer Science')}
            className="rounded-lg border border-gray-400 p-3"
          >
            Update Subject: Computer Science
          </button>
          <button
            onClick={() => handleUpdateExpertise(userId, 'Beginner')}
            className="rounded-lg border border-gray-400 p-3"
          >
            Update Expertise: Beginner
          </button>
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-20">
          {/* Subject */}
          <div className="mx-auto grid w-full grid-cols-[1fr_2fr]">
            <h1 className="font-medium">Subject:&nbsp;</h1>
            <p className="text-blue-500">{userSubject || 'n/a'}</p>
          </div>
          {/* Expertise */}
          <div className="mx-auto grid w-full grid-cols-[1fr_2fr]">
            <h1 className="font-medium">Expertise:&nbsp;</h1>
            <p className="text-blue-500">{userExpertise || 'n/a'}</p>
          </div>
        </div>
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
