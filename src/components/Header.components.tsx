export const Header = () => {
  return (
    <>
      <div className="bg-[#17153A] w-full z-10 absolute h-[88px]">
        <div className="max-w-[1440px] flex justify-between items-center mx-auto">
          <div>
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329496/TalkThru/Landing%20Page/TalkThru_logo_zalxz1.png"
              alt="logo"
            />
          </div>
          <div className="pr-[58px] flex items-center gap-[38px]">
            <button className="flex justify-center items-center h-[50px] w-[145px] bg-[#F1F192] text-[25px] font-medium rounded-full">
              Login
            </button>
            <button className="flex justify-center items-center h-[50px] w-[145px] bg-[#F1F192] text-[25px] font-medium rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
