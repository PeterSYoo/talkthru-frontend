export const EnjoyYourSession = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-[#17153A]">
        <div className="flex items-center gap-[111px] px-5">
          {/* Image */}
          <div>
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329643/TalkThru/Landing%20Page/enjoy_your_session_zzycut.png"
              alt="enjoy your session"
            />
          </div>
          {/* Info Text */}
          <div className="flex max-w-[615px] flex-col gap-[63px]">
            {/* Heading */}
            <h1 className="text-[60px] font-bold leading-[90px] text-white">
              Enjoy your session
            </h1>
            {/* Paragraph */}
            <p className="text-[22px] font-medium leading-[33px] text-white">
              Meet your new partner, and get to know their study habits. Are
              they struggling with a certain topic, or is there something you
              need help with? Ask away, and chat! TalkThru aims to make sure you
              get the academic support you need. Enjoy our video chatting
              features, including the ability to share your device’s screen with
              your partner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
