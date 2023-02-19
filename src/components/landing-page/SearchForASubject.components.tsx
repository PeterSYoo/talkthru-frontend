export const SearchForASubject = () => {
  return (
    <>
      <div className="h-screen w-full bg-[#17153A] flex justify-center items-center">
        <div className="flex items-center gap-[111px]">
          {/* Image */}
          <div>
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329623/TalkThru/Landing%20Page/search_for_a_subject_nmrkd5.png"
              alt="search for a subject"
            />
          </div>
          {/* Info Text */}
          <div className="flex flex-col max-w-[616px] gap-[41px]">
            {/* Heading */}
            <h1 className="text-[60px] leading-[90px] font-bold text-white">
              Search for a subject
            </h1>
            {/* Paragraph */}
            <p className="text-[22px] text-white leading-[33px] font-medium">
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
