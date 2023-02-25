export const Matched = ({ subject }: { subject: string }) => {
  return (
    <>
      <div className="mx-auto flex max-w-[1440px] flex-col px-[105px] pt-[96px] pb-[113px]">
        <div className="grid grid-cols-[1fr_9fr_1fr]">
          <button className="flex w-fit items-start">
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676932265/TalkThru/Waiting%20Room%20Page/Choose%20Expertise%20Level/ion_arrow-back-circle-sharp_e0cf3k.png"
              alt="back arrow"
            />
          </button>
          <h1 className="flex w-full justify-center text-center text-[64px] font-bold">
            {subject}
          </h1>
        </div>
        {/* Voila */}
        <div className="mx-auto flex flex-col pt-[48px]">
          <span className="text-[25px] font-medium">Voila!</span>
        </div>
      </div>
    </>
  );
};
