import { useContext, useState } from 'react';
import { ChooseExpertise } from '../components/match-me/ChooseExpertise.components';
import { ChooseSubject } from '../components/match-me/ChooseSubject.components';
import { LookingForUser } from '../components/match-me/LookingForUser.components';
import { RoomContext } from '../contexts/RoomContext';
import { UserContext } from '../contexts/UserContext';
import { webSocket } from '../webSocket';

// Set the URL of the backend server
const server_url = import.meta.env.VITE_BACKEND_URL as string;

export const MatchMePage = () => {
  const [subject, setSubject] = useState<string>('');
  const [expertise, setExpertise] = useState<string>('');
  const { userId, subject: userSubject } = useContext(UserContext);
  const [matchedUser, setMatchedUser] = useState<any>();
  const { enterRoom } = useContext(RoomContext);

  const handleMatchUser = async (expertise: string) => {
    try {
      const response = await fetch(`${server_url}/matching/choose-expertise`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: userSubject,
          id: userId,
          expertise,
        }),
      });
      const result = await response.json();

      if (response.ok) {
        setMatchedUser(result);
        enterRoom(result.roomId);
        console.log(result);
      } else if (response.status === 404) {
        webSocket.emit('create-room');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Demo for updating user subject and expertise on backend */}
      <div className="mt-3 flex flex-col items-center gap-3">
        <button
          // onClick={() => handleMatchUser(userSubject, userId, 'Intermediate')}
          className="border border-gray-400 p-3"
        >
          Find User to Match
        </button>
        <div className="font-medium">Name: {matchedUser?.name || 'na'}</div>
      </div>
      {/*  */}
      <div className="h-screen w-full">
        {/* Choose a Subject */}
        {subject === '' && <ChooseSubject setSubject={setSubject} />}
        {/* Choose Expertise */}
        {expertise === '' && (
          <>
            {subject !== '' && (
              <ChooseExpertise
                subject={subject}
                setSubject={setSubject}
                expertise={expertise}
                setExpertise={setExpertise}
                handleMatchUser={handleMatchUser}
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
