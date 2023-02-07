export const ShareScreenButton: React.FC<{onClick: () => void}> = ({onClick}) => {
  return (
    <button
      className="bg-green-400 py-2 px-4 rounded-lg text-xl hover:bg-green-600 text-white"
      onClick={onClick}
    >
      Screen Share
    </button>
  )
}