import { useContext } from 'react';
import { RoomContext } from '../../contexts/RoomContext';

interface IConfirmLeaveModal {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConfirmLeaveModal: React.FC<IConfirmLeaveModal> = ({ setIsOpen }) => {
	// Destructure context for the props we need
	const { leaveRoom } = useContext(RoomContext);

	return (
		<>
			{/* Full Screen Container */}
			<div
				className='absolute flex h-full w-full items-center justify-center backdrop-blur'
				onClick={() => setIsOpen(false)}>
				{/* Confirmation Window */}
				<div
					className='font-workSans z-50 flex h-[154px] w-[328px] flex-col items-center justify-between rounded-[10px] border-[0.5px] border-[#0B0A1D] bg-[#D1D1D2] p-[32px] shadow-[1px_4px_4px_rgba(0,0,0,0.25)]'
					onClick={(e) => e.stopPropagation()}>
					<span className='text-[22px] font-semibold leading-[30px] text-[#0B0A1D]'>
						Leave meeting?
					</span>
					<button
						className='h-[44px] w-[77px] rounded-[8px] bg-[#ED1F0E] text-[18px] font-medium leading-[26px] text-[#DEDAD5] shadow-meeting-room'
						onClick={leaveRoom}>
						Leave
					</button>
				</div>
			</div>
		</>
	);
};
