interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({onClick}) => {
  return (
    <button
      className={`bg-green-400 hover:bg-green-600 py-2 px-4 mx-2 rounded-lg text-xl text-white`}
      onClick={onClick}
    >
      Chat
    </button>
  )
}