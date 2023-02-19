export const ChooseSubject = () => {
  return (
    <>
      <div className="flex flex-col gap-[82px] px-[105px] pt-[106px] pb-[313px]">
        <div className="flex flex-col gap-[100px]">
          {/* Step 1 of 2 */}
          <div>
            <span className="text-[22px] font-medium">Step 1 of 2</span>
            <h1 className="text-[40px] font-bold">Find a field of study</h1>
            <span className="text-[18px] font-medium">
              Select up to 1 field of study that pertains to your desired study
              session.{' '}
            </span>
          </div>
          {/* Browse by field of study */}
          <div>
            <span className="text-[22px] font-bold">
              Browse by field of study
            </span>
          </div>
        </div>
        {/* Subjects */}
        <div className="flex flex-wrap gap-[122px]">
          <button className="flex h-[216px] w-[216px] items-center justify-center rounded-[11px] shadow-[0px_2px_5px_rgba(0,0,0,0.6)]">
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676616390/TalkThru/Waiting%20Room%20Page/Choose%20Subject/business_mmt9ab.png"
              alt="business"
            />
          </button>
          <button className="flex h-[216px] w-[216px] items-center justify-center rounded-[11px] shadow-[0px_2px_5px_rgba(0,0,0,0.6)]">
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676616390/TalkThru/Waiting%20Room%20Page/Choose%20Subject/nursing_fahq8v.png"
              alt="nursing"
            />
          </button>
          <button className="flex h-[216px] w-[216px] items-center justify-center rounded-[11px] shadow-[0px_2px_5px_rgba(0,0,0,0.6)]">
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676616390/TalkThru/Waiting%20Room%20Page/Choose%20Subject/biomedical_w43pfq.png"
              alt="biomedical"
            />
          </button>
          <button className="flex h-[216px] w-[216px] items-center justify-center rounded-[11px] shadow-[0px_2px_5px_rgba(0,0,0,0.6)]">
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676616390/TalkThru/Waiting%20Room%20Page/Choose%20Subject/biology_tb0wf6.png"
              alt="biology"
            />
          </button>
        </div>
      </div>
    </>
  );
};
