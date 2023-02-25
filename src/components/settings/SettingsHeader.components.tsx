export const SettingsHeader = ({
  settingsString,
  setSettingsString,
}: {
  settingsString: string;
  setSettingsString: (nav: string) => void;
}) => {
  return (
    <>
      <div className="flex h-full items-end gap-[12px]">
        <button
          onClick={() => setSettingsString('Account Setting')}
          className={`${
            settingsString === 'Account Setting'
              ? 'border-[#17153A] font-bold text-[#17153A]'
              : 'border-[#E0E4EC] font-medium text-[#717B8C]'
          } border-b-2 px-[12px] pb-[9px] text-[20px]`}
        >
          Account Setting
        </button>
        <button
          onClick={() => setSettingsString('Login & Security')}
          className={`${
            settingsString === 'Login & Security'
              ? 'border-[#17153A] font-bold text-[#17153A]'
              : 'border-[#E0E4EC] font-medium text-[#717B8C]'
          } border-b-2 px-[12px] pb-[9px] text-[20px]`}
        >
          Login & Security
        </button>
        <button
          onClick={() => setSettingsString('Notifications')}
          className={`${
            settingsString === 'Notifications'
              ? 'border-[#17153A] font-bold text-[#17153A]'
              : 'border-[#E0E4EC] font-medium text-[#717B8C]'
          } border-b-2 px-[12px] pb-[9px] text-[20px]`}
        >
          Notifications
        </button>
        <button
          onClick={() => setSettingsString('Video')}
          className={`${
            settingsString === 'Video'
              ? 'border-[#17153A] font-bold text-[#17153A]'
              : 'border-[#E0E4EC] font-medium text-[#717B8C]'
          } border-b-2 px-[12px] pb-[9px] text-[20px]`}
        >
          Video
        </button>
      </div>
    </>
  );
};
