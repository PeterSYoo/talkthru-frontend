import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const PostMeetingPage = () => {
	const { handleResetSearchCriteria } = useContext(UserContext);

	return (
		<>
			<div className='flex h-full w-full flex-row items-center justify-center bg-[#9A9A9A]'>
				<div className='p-[56px 0px] flex h-[765.36px] w-[1360px] flex-col items-center justify-center gap-[32px] rounded-[16px] bg-[#FFFFFF] '>
					<div className='gap-40px flex h-[237px] w-[618px] flex-col items-center justify-center p-0 '>
						<h2 className='text-center text-[40px] font-bold leading-[60px]'>Thank you!</h2>
						<p className='text-center text-[22px] leading-[33px]'>
							Congratulations on successfully completing your call!
						</p>
					</div>
					<div className='h-[0px] w-[720px] border-2 border-[#E0E4EC]'></div>
					<div className='flex h-[351px] w-[692px] flex-col items-center gap-[32px] p-0'>
						<div className='flex h-[79px] w-[692px] flex-col items-center gap-[10px] p-[10px]'>
							<h3 className='text-center text-[22px] font-bold leading-[33px]'>
								Was mango helpful?
							</h3>
							<p className='text-center text-[18px] leading-[27px]'>
								Your review keeps our small team motivated to make TalkThru even better.
							</p>
						</div>
						<div className='flex h-[48px] w-[272px] flex-row items-start gap-[8px] p-0'>
							<img
								className='h-[48px] w-[48px]'
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1677319394/TalkThru/Post-Meeting%20Page/star_border_avwxo9.png'
								alt='rating star outline'
							/>
							<img
								className='h-[48px] w-[48px]'
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1677319394/TalkThru/Post-Meeting%20Page/star_border_avwxo9.png'
								alt='rating star outline'
							/>
							<img
								className='h-[48px] w-[48px]'
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1677319394/TalkThru/Post-Meeting%20Page/star_border_avwxo9.png'
								alt='rating star outline'
							/>
							<img
								className='h-[48px] w-[48px]'
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1677319394/TalkThru/Post-Meeting%20Page/star_border_avwxo9.png'
								alt='rating star outline'
							/>
							<img
								className='h-[48px] w-[48px]'
								src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1677319394/TalkThru/Post-Meeting%20Page/star_border_avwxo9.png'
								alt='rating star outline'
							/>
						</div>
						<div className='h-[120px] w-[408px] gap-[5px] border-[#BFBFBF] p-0'>
							<textarea
								className='flex h-[120px] w-[408px] flex-col items-start gap-[5px] border-[2px] border-[#BFBFBF] p-[10px] text-[15px] leading-[22px] text-[#BFBFBF]'
								placeholder='Write a review for Jeff (Optional)'></textarea>
						</div>
						<button
							className='flex h-[48px] w-[408px] flex-row items-center justify-center gap-[10px] rounded-[50px] bg-[#F1F192] p-[10px]'
							onClick={handleResetSearchCriteria}>
							Return to home
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
