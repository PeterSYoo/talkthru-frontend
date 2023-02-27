export const JoinTheTalkThruCommunityNow = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="grid grid-cols-[1fr_1fr] gap-[118px] px-5">
          {/* Sign Up Container */}
          <div className="flex w-full max-w-[550px] flex-col gap-[32px] rounded-[50px] px-[71px] py-[43px] shadow-[4px_4px_3px_5px] shadow-[#BFBFBF]">
            {/* Form Inputs */}
            <div className="mt-[22px] flex w-full flex-col gap-[19px]">
              {/* Sign Up */}
              <h1 className="text-[32px] font-bold">Sign Up</h1>
              {/* Name */}
              <label className="mx-auto w-full">
                <p className="text-[15px] font-medium">Full Name</p>
                <input
                  type="text"
                  className="mt-2 h-[48px] w-full rounded-lg border border-gray-400 px-2 focus:outline-none"
                />
              </label>
              {/* Email */}
              <label className="mx-auto w-full">
                <p className="text-[15px] font-medium">Email</p>
                <input
                  type="email"
                  className="mt-2 h-[48px] w-full rounded-lg border border-gray-400 px-2 focus:outline-none"
                />
              </label>
              {/* Password */}
              <label className="mx-auto w-full">
                <p className="text-[15px] font-medium">Password</p>
                <input
                  type="password"
                  className="mt-2 h-[48px] w-full rounded-lg border border-gray-400 px-2 focus:outline-none"
                />
              </label>
            </div>
            {/* Sign Up & Google Button */}
            <div className="flex w-full flex-col gap-[15px]">
              {/* Sign Up Button */}
              <button className="flex h-[48px] w-full items-center justify-center rounded-full bg-[#F1F192] text-[22px] font-medium hover:bg-[#E4E325]">
                Sign Up
              </button>
              <p className="mx-auto text-[22px] font-bold">OR</p>
              {/* Google Continue Button */}
              <button className="flex h-[50px] w-full items-center justify-center gap-[37px] rounded-full border border-gray-400">
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676338774/TalkThru/Landing%20Page/logos_google-icon_pe5kng.png"
                  alt="google icon"
                />
                <span className="text-[25px] font-medium">
                  Continue with Google
                </span>
              </button>
              {/* TOS & Already Registered? */}
              <div className="flex flex-col gap-[17px] pt-[10px]">
                <p className="text-center text-[15px]">
                  By continuing, you agree to TalkThru{'’'}s
                  <span className="font-bold"> Terms of Service</span> and
                  acknowledge you{'’'}ve read our&nbsp;
                  <span className="font-bold">
                    Privacy Policy. Notice at cancellation.
                  </span>
                </p>
                <p className="text-center text-[15px]">
                  Already registered?&nbsp;
                  <span className="font-bold">Login.</span>
                </p>
              </div>
            </div>
          </div>
          {/* Info Text */}
          <div className="flex h-full flex-col items-center justify-center gap-[99px]">
            <div>
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677478588/TalkThru/Landing%20Page/Hands_chat_epkz76.png"
                alt="chat bubbles"
              />
            </div>
            <h1 className="max-w-[545px] text-[60px] font-bold">
              Join the TalkThru community now
              <span className="text-[#E4E325]">.</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
