import { FadeLoader } from 'react-spinners';

export const LookingForUser = ({
  subject,
  setExpertise,
}: {
  subject: string;
  setExpertise: (expertise: string) => void;
}) => {
  return (
    <>
      <div className="mx-auto flex max-w-[1440px] flex-col px-[105px] pt-[96px] pb-[113px]">
        <div className="grid grid-cols-[1fr_9fr_1fr]">
          <button
            onClick={() => setExpertise('')}
            className="flex w-fit items-start"
          >
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676932265/TalkThru/Waiting%20Room%20Page/Choose%20Expertise%20Level/ion_arrow-back-circle-sharp_e0cf3k.png"
              alt="back arrow"
            />
          </button>
          <h1 className="flex w-full justify-center text-center text-[64px] font-bold">
            {subject}
          </h1>
        </div>
        {/* Pairing With Another User */}
        <div className="mx-auto flex flex-col pt-[48px]">
          <span className="text-[25px] font-medium">
            Pairing you with an available user...
          </span>
          <div className="mx-auto h-[180px] w-[180px] pt-[20px]">
            <FadeLoader margin={35} height={60} width={7} />
          </div>
          <span className="pt-[88px] text-center text-[25px] font-medium">
            This may take a few seconds.
          </span>
          <span className="pt-[48px] text-center text-[25px] font-medium">
            Please be patient!
          </span>
        </div>
        {/* Smile */}
        <div className="mx-auto pt-[29px]">
          <img
            src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676939557/TalkThru/Waiting%20Room%20Page/Choose%20Expertise%20Level/arcticons_carsmile_hqkhcm.png"
            alt="smile"
          />
        </div>
      </div>
    </>
  );
};
