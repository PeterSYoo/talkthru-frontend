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
	const { userData } = useContext(UserContext);

	return (
		<>
			<div className='h-screen w-full'>
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
				{expertise !== '' && <LookingForUser setExpertise={setExpertise} subject={subject} />}
			</div>
		</>
	);
};
