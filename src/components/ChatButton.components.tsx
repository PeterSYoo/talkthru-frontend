interface ChatButtonProps {
	onClick: () => void;
	title: string;
	imageUrl: string;
	altText: string;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ onClick, title, imageUrl, altText }) => {
	return (
		<>
			<button
				onClick={onClick}
				className='flex h-full flex-col items-center justify-end gap-[10px] pb-[10px]'>
				<img src={imageUrl} alt={altText} />
				<span className=''>{title}</span>
			</button>
		</>
	);
};