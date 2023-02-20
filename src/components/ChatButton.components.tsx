interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({onClick}) => {
  return (
		<button
			className={`bg-green-400 hover:bg-green-600 py-2 px-4 mx-2 rounded-lg text-xl text-white`}
			onClick={onClick}>
			<img
				src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676592008/TalkThru/Meeting%20Room%20Page/chat_hqdtn9.png'
				alt='chat-toggle-icon'
			/>
		</button>
	);
}