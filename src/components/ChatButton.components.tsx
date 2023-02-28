interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({onClick}) => {
  return (
		<>
			<button
				onClick={onClick}
				className='flex h-full flex-col items-center justify-end gap-[10px] pb-[10px]'>
				<img
					src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676681555/TalkThru/Meeting%20Room%20Page/chat_normal.png'
					alt='chat-toggle-icon'
				/>
				<span className=''>Messages</span>
			</button>
		</>
	);
}