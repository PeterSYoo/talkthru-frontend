interface ShareScreenButtonProps {
  onClick: () => void;
  screenSharingId: string;
}

export const ShareScreenButton: React.FC<ShareScreenButtonProps> = ({onClick, screenSharingId}) => {
  return (
    <button
      className={`py-2 px-4 mx-2 rounded-lg text-xl text-white ${
        screenSharingId ? "bg-red-400 hover:bg-red-600" : "bg-green-400 hover:bg-green-600"}`}
      onClick={onClick}
    >
      {screenSharingId ? "Stop Sharing" : "Start Sharing"}
    </button>
  )
}