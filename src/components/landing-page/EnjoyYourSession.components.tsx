export const EnjoyYourSession = () => {
  return (
    <>
      <div className="h-screen w-full bg-[#17153A] flex justify-center items-center">
        <div className="flex items-center gap-[111px]">
          {/* Image */}
          <div>
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329643/TalkThru/Landing%20Page/enjoy_your_session_zzycut.png"
              alt="enjoy your session"
            />
          </div>
          {/* Info Text */}
          <div className="flex flex-col max-w-[615px] gap-[41px]">
            {/* Heading */}
            <h1 className="text-[60px] leading-[90px] font-bold text-white">
              Enjoy your session
            </h1>
            {/* Paragraph */}
            <p className="text-[22px] text-white leading-[33px] font-medium">
              Meet your new partner, and get to know their study habits. Are
              they struggling with a certain topic, or is there something you
              need help with? Ask away, and chat! TalkThru aims to make sure you
              get academic support you need. Enjoy our video chatting features,
              including the ability to share your device’s screen with your
              partner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
