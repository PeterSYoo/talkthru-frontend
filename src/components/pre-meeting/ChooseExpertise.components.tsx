export const ChooseExpertise = ({
  subject,
  setSubject,
  expertise,
  setExpertise,
}: {
  subject: string;
  setSubject: (subject: string) => void;
  expertise: string;
  setExpertise: (expertise: string) => void;
}) => {
  return (
    <>
      <div className="mx-auto flex max-w-[1440px] flex-col px-[105px] pt-[96px] pb-[113px]">
        <div className="grid grid-cols-[1fr_9fr_1fr]">
          <button
            onClick={() => setSubject('')}
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
        {/* Step 2 of 2 */}
        <div className="flex flex-col pt-[48px]">
          <span className="text-[22px] font-medium">Step 2 of 2</span>
          <h1 className="text-[40px] font-bold">Choose an expertise level.</h1>
          <span className="pt-[64px] text-[18px] font-medium">
            Make your selection based on the level that best matches your
            experience.
          </span>
        </div>
        {/* Choose Expertise Level */}
        <div className="mx-auto flex flex-col gap-[8px] pt-[128px]">
          <div className="mx-auto flex items-center gap-[20px]">
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676937134/TalkThru/Waiting%20Room%20Page/Choose%20Expertise%20Level/maki_fitness-centre-beginner_lwqyp0.png"
              alt="beginner"
            />
            <button
              onClick={() => setExpertise('Beginner')}
              className="flex h-[50px] w-[405px] items-center justify-center rounded-full bg-[#F1F192] text-[25px]"
            >
              Beginner
            </button>
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676937134/TalkThru/Waiting%20Room%20Page/Choose%20Expertise%20Level/maki_fitness-centre-beginner_lwqyp0.png"
              alt="beginner"
            />
          </div>
          <div className="mx-auto flex items-center gap-[20px]">
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676937135/TalkThru/Waiting%20Room%20Page/Choose%20Expertise%20Level/maki_fitness-centre-intermediate_hmlbxq.png"
              alt="intermediate"
            />
            <button
              onClick={() => setExpertise('Intermediate')}
              className="flex h-[50px] w-[405px] items-center justify-center rounded-full bg-[#E4E325] text-[25px]"
            >
              Intermediate
            </button>
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676937135/TalkThru/Waiting%20Room%20Page/Choose%20Expertise%20Level/maki_fitness-centre-intermediate_hmlbxq.png"
              alt="intermediate"
            />
          </div>
          <div className="mx-auto flex items-center gap-[20px]">
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676937134/TalkThru/Waiting%20Room%20Page/Choose%20Expertise%20Level/maki_fitness-centre-advanced_rprbvu.png"
              alt="advanced"
            />
            <button
              onClick={() => setExpertise('Advanced')}
              className="flex h-[50px] w-[405px] items-center justify-center rounded-full bg-[#ABAA1C] text-[25px]"
            >
              Advanced
            </button>
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676937134/TalkThru/Waiting%20Room%20Page/Choose%20Expertise%20Level/maki_fitness-centre-advanced_rprbvu.png"
              alt="advanced"
            />
          </div>
        </div>
        <div className="flex justify-center pt-[38px]">
          <img
            src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676937148/TalkThru/Waiting%20Room%20Page/Choose%20Expertise%20Level/ion_fitness_ixj0ei.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
