export const SearchForASubject = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-[#17153A]">
        <div className="flex items-center gap-[111px] px-5">
          {/* Image */}
          <div>
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329623/TalkThru/Landing%20Page/search_for_a_subject_nmrkd5.png"
              alt="search for a subject"
            />
          </div>
          {/* Info Text */}
          <div className="flex max-w-[616px] flex-col gap-[67px]">
            {/* Heading */}
            <h1 className="text-[60px] font-bold leading-[90px] text-white">
              Search for a subject
            </h1>
            {/* Paragraph */}
            <p className="text-[22px] font-medium leading-[33px] text-white">
              After you successfully log in, or create an account if you’re a
              new member to our platform, you will begin your peer-finding
              journey by searching for your relevant field of study. From
              mechanical engineering to biomedical sciences, TalkThru wants to
              help you help connect you with a friend!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
