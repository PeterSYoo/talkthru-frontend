export const JoinTheTalkThruCommunityNow = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex justify-center items-center gap-[95px] w-full">
          {/* Create an Account */}
          <div className="flex flex-col max-w-[570px] w-full border border-gray-400 rounded-[50px] shadow-md shadow-gray-500 pt-[68px] pb-[34px] px-[83px]">
            {/* Heading */}
            <h1 className="mx-auto text-[40px] leading-[60px] font-bold">
              Create an Account
            </h1>
            {/* Form Inputs */}
            <div className="flex flex-col gap-[30px] mt-[22px]">
              {/* Name */}
              <label className="mx-auto w-full">
                <p className="text-[22px] font-medium">Name</p>
                <input
                  type="text"
                  className="w-full border border-gray-400 rounded-md h-[53px] focus:outline-none px-2"
                />
              </label>
              {/* Email */}
              <label className="mx-auto w-full">
                <p className="text-[22px] font-medium">Email</p>
                <input
                  type="email"
                  className="w-full border border-gray-400 rounded-md h-[53px] focus:outline-none px-2"
                />
              </label>
              {/* Password */}
              <label className="mx-auto w-full">
                <p className="text-[22px] font-medium">Password</p>
                <input
                  type="password"
                  className="w-full border border-gray-400 rounded-md h-[53px] focus:outline-none px-2"
                />
              </label>
            </div>
            {/* Sign Up & Google Button */}
            <div className="flex flex-col gap-[22px] mt-[60px]">
              {/* Sign Up Button */}
              <button className="w-[395px] h-[50px] bg-[#F1F192] rounded-full flex justify-center items-center text-[25px] font-medium">
                Sign Up
              </button>
              <p className="text-[22px] font-bold mx-auto">OR</p>
              {/* Google Continue Button */}
              <button className="w-[395px] h-[50px] border border-gray-400 rounded-full flex justify-center items-center gap-[37px]">
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676338774/TalkThru/Landing%20Page/logos_google-icon_pe5kng.png"
                  alt="google icon"
                />
                <span className="text-[25px] font-medium">
                  Continue with Google
                </span>
              </button>
            </div>
            {/* TOS & Already Registered? */}
            <div className="flex flex-col gap-[17px] mt-[26px]">
              <p className="text-[15px] text-center">
                By continuing, you agree to TalkThru{'’'}s <br />
                <span className="font-bold">Terms of Service</span> and
                acknowledge you{'’'}ve read our&nbsp;
                <span className="font-bold">
                  Privacy Policy. Notice at cancellation.
                </span>
              </p>
              <p className="text-[15px] text-center">
                Already registered?&nbsp;
                <span className="font-bold">Login.</span>
              </p>
            </div>
          </div>
          {/* Info Text */}
          <h1 className="text-[60px] font-bold max-w-[545px]">
            Join the TalkThru community now
            <span className="text-[#E4E325]">.</span>
          </h1>
        </div>
      </div>
    </>
  );
};
