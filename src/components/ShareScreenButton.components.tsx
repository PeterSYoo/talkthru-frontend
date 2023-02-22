interface ShareScreenButtonProps {
  onClick: () => void;
  screenSharingId: string;
}

export const ShareScreenButton: React.FC<ShareScreenButtonProps> = ({onClick, screenSharingId}) => {
  return (
		<button
			className={`py-2 px-4 mx-2 rounded-lg text-xl text-white ${
				screenSharingId ? 'bg-red-400 hover:bg-red-600' : 'bg-green-400 hover:bg-green-600'
			}`}
			onClick={onClick}>
			<img
				src='https://res.cloudinary.com/dryh1nvhk/image/upload/v1676592008/TalkThru/Meeting%20Room%20Page/share_screen_bjiv34.png'
				alt='screen-share-icon'
			/>
		</button>
	);
}