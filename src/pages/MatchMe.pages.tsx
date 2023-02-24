import { useState } from 'react';
import { ChooseExpertise } from '../components/pre-meeting/ChooseExpertise.components';
import { ChooseSubject } from '../components/pre-meeting/ChooseSubject.components';
import { LookingForUser } from '../components/pre-meeting/LookingForUser.components';

export const MatchMePage = () => {
  const [subject, setSubject] = useState<string>('');
  const [expertise, setExpertise] = useState<string>('');

  return (
    <>
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
