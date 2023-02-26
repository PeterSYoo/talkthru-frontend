import { INote } from '../../types/Chat';

export const ChatNote: React.FC<{ note: INote }> = ({ note }) => {
	const time = new Date(note.timestamp).toLocaleTimeString();

	return (
		<>
			{/* Row Container */}
			<div
				className='my-2 ml-[19px] flex justify-start pr-9
				font-archivo'>
				{/* Note Container */}
				<div className='flex flex-col'>
					{/* Content Container */}
					<div className='shadow-[0px 1px 6px 0px rgba(0, 0, 0, 0.25)] inline-block rounded bg-[#E4E325] p-[10px] text-[14px]'>
						{note.content}
						{/* Timer */}
						<div className='text-left text-xs opacity-50'>{time}</div>
					</div>
				</div>
			</div>
		</>
	);
};
