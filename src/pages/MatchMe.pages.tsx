import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateButton } from '../components/CreateButton.components';
import { ChooseExpertise } from '../components/match-me/ChooseExpertise.components';
import { ChooseSubject } from '../components/match-me/ChooseSubject.components';
import { LookingForUser } from '../components/match-me/LookingForUser.components';
import { UserContext } from '../contexts/UserContext';

// Set the URL of the backend server
const server_url = import.meta.env.VITE_BACKEND_URL as string;

export const MatchMePage = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedExpertise, setSelectedExpertise] = useState<string>('');
  const {
    userData,
    setUserData,
    userId,
    subject: userSubject,
  } = useContext(UserContext);
  const [matchedUser, setMatchedUser] = useState<any>();
  const [canSearch, setCanSearch] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleUpdateSubject = async (id: string, subject: string) => {
    console.log('handleUpdateSubject Called');
    try {
      const response = await fetch(`${server_url}/matching/choose-subject`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, subject }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log({ result });
        setUserData(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateExpertise = async (id: string, expertise: string) => {
    console.log('handleUpdateExpertise Called');
    try {
      const response = await fetch(`${server_url}/matching/choose-expertise`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, expertise }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log({ result });
        setUserData(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleMatchUser = async (userId: string) => {
    console.log('handleMatchingUser Called');
    setIsSearching(true);
    try {
      const response = await fetch(`${server_url}/matching/match-user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId }),
      });

      const result = await response.json();
      console.log({ result });
      navigate(`/room/${result}`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleUpdateSubject(userId, selectedSubject);
  }, [selectedSubject]);

  useEffect(() => {
    handleUpdateExpertise(userId, selectedExpertise);
  }, [selectedExpertise]);

  useEffect(() => {
    setCanSearch(selectedSubject !== '' && selectedExpertise !== '');
  }, [selectedSubject, selectedExpertise]);

  // console.log({ userData });
  // console.log({ selectedSubject });
  // console.log({ selectedExpertise });
  // console.log({ canSearch });
  // console.log({ isSearching });

  return (
    <>
      <div className="w-full">
        {/* Choose a Subject */}
        {selectedSubject === '' && (
          <ChooseSubject setSubject={setSelectedSubject} />
        )}
        {/* Choose Expertise */}
        {selectedExpertise === '' && (
          <>
            {selectedSubject !== '' && (
              <ChooseExpertise
                subject={selectedSubject}
                setSubject={setSelectedSubject}
                expertise={selectedExpertise}
                setExpertise={setSelectedExpertise}
              />
            )}
          </>
        )}
        {/* Looking for User */}
        {isSearching && (
          <LookingForUser
            setExpertise={setSelectedExpertise}
            subject={selectedSubject}
          />
        )}

        {/* Demo for updating user subject and expertise on backend */}
        {/* <div className="mt-3 flex flex-col items-center gap-3">
          {userData && userData.name}
          {canSearch && (
            <button
              onClick={() => handleMatchUser(userId)}
              className="border border-gray-400 p-3"
            >
              Find User to Match
            </button>
          )}
          <div className="font-medium">Name: {matchedUser?.name || 'na'}</div>
          {matchedUser && <CreateButton onClick={handleMatchUser} />}
        </div> */}
      </div>
    </>
  );
};
