export const ChooseExpertise = ({
	userId,
	subject,
	setSubject,
	expertise,
	setExpertise,
	handleMatchUser,
	canSearch,
}: {
	userId: string;
	subject: string;
	setSubject: (subject: string) => void;
	expertise: string;
	setExpertise: (expertise: string) => void;
	handleMatchUser: (userId: string) => void;
	canSearch: boolean;
}) => {
	// console.log({ canSearch });
	return (
		<>
			<div className='mx-auto flex max-w-[1440px] flex-col px-[105px] pt-[18px]'>
				<div className='grid grid-cols-[1fr_9fr_1fr] items-center'>
					<button onClick={() => setSubject('')} className='flex w-fit items-start'>
						<img
							src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676932265/TalkThru/Waiting%20Room%20Page/Choose%20Expertise%20Level/ion_arrow-back-circle-sharp_e0cf3k.png'
							alt='back arrow'
						/>
					</button>
					<h1 className='flex w-full justify-center text-center text-[64px] font-bold'>
						{subject}
					</h1>
				</div>
				{/* Step 2 of 2 */}
				<div className='flex flex-col pt-[78px]'>
					<h1 className='text-[40px] font-bold'>Choose an expertise level.</h1>
					<span className='pt-[64px] text-[18px] font-medium'>
						Make your selection based on the level that best matches your experience.
					</span>
				</div>
				{/* Choose Expertise Level */}
				<div className='mx-auto flex flex-col gap-[8px] pt-[128px]'>
					<div className='mx-auto flex items-center gap-[20px]'>
						<button
							onClick={() => setExpertise('Beginner')}
							className='flex h-[50px] w-[405px] items-center justify-center rounded-full bg-[#F1F192] text-[25px] transition duration-100 hover:bg-[#BFBFBF]'>
							Beginner
						</button>
					</div>
					<div className='mx-auto flex items-center gap-[20px]'>
						<button
							onClick={() => setExpertise('Intermediate')}
							className='flex h-[50px] w-[405px] items-center justify-center rounded-full bg-[#E4E325] text-[25px] transition duration-100 hover:bg-[#BFBFBF]'>
							Intermediate
						</button>
					</div>
					<div className='mx-auto flex items-center gap-[20px]'>
						<button
							onClick={() => setExpertise('Advanced')}
							className='flex h-[50px] w-[405px] items-center justify-center rounded-full bg-[#ABAA1C] text-[25px] transition duration-100 hover:bg-[#BFBFBF]'>
							Advanced
						</button>
					</div>
				</div>
				<div className='flex justify-center pt-[70px]'>
					<button disabled={!canSearch} onClick={() => handleMatchUser(userId)}>
						<img
							src={
								canSearch
									? 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677731770/TalkThru/Choose%20Expertise/proceed_ohzdwk.png'
									: 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677731755/TalkThru/Choose%20Expertise/proceed_greyed_i8ym85.png'
							}
							alt='match-me-proceed-icon'
							className='mx-auto h-[66px] w-[66px]'
						/>
						{canSearch && (
							<div className='mt-[18px] text-[22px] font-medium text-[#17153A]'>Proceed</div>
						)}
					</button>
				</div>
			</div>
		</>
	);
};
