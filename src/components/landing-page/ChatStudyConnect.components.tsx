export const ChatStudyConnect = () => {
  return (
    <>
      <div className="grid grid-rows-[88px_1fr] h-screen w-full">
        {/* Header */}
        <div className="bg-[#17153A] w-full">
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
        {/* Main */}
        <div className="flex flex-col bg-white h-full">
          <div className="flex justify-center items-center gap-[129px] h-full">
            {/* Info Text */}
            <div>
              {/* Heading */}
              <h1 className="text-[60px] font-bold max-w-[370px] leading-[70.38px]">
                Chat
                <span className="text-[#E4E325]">.</span> Study
                <span className="text-[#E4E325]">.</span> Connect
                <span className="text-[#E4E325]">.</span>
              </h1>
              {/* Paragraph */}
              <p className="max-w-[509px] text-[22px] font-medium leading-[25.81px] pt-[66px]">
                Need support when it comes to your
                <br /> studies? Want to work things through with a<br /> peer?
                Create an account to access our service
                <br /> and get connected with someone now!
              </p>
              {/* Sign Up Button */}
              <button className="w-[395px] h-[50px] border-2 border-[#F1F192] bg-[#F1F192] rounded-[30px] flex justify-center items-center text-[25px] font-medium mt-[47px]">
                Sign Up
              </button>
            </div>
            {/* Image */}
            <div>
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329623/TalkThru/Landing%20Page/chat_study_connect_xjuwci.png"
                alt="chat-study-connect"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[21px] pb-[33px]">
            <div>
              <button>
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329558/TalkThru/Landing%20Page/down_arrow_kf61rx.png"
                  alt="down-button"
                />
              </button>
            </div>
            <p className="text-[22px] font-medium">How it Works</p>
          </div>
        </div>
      </div>
    </>
  );
};