export const JoinTheTalkThruCommunityNow = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex w-full items-center justify-center gap-[95px]">
          {/* Create an Account */}
          <div className="flex w-full max-w-[570px] flex-col rounded-[50px] border border-gray-400 px-[83px] pt-[68px] pb-[34px] shadow-md shadow-gray-500">
            {/* Heading */}
            <h1 className="mx-auto text-[40px] font-bold leading-[60px]">
              Create an Account
            </h1>
            {/* Form Inputs */}
            <div className="mt-[22px] flex flex-col gap-[30px]">
              {/* Name */}
              <label className="mx-auto w-full">
                <p className="text-[22px] font-medium">Name</p>
                <input
                  type="text"
                  className="h-[53px] w-full rounded-md border border-gray-400 px-2 focus:outline-none"
                />
              </label>
              {/* Email */}
              <label className="mx-auto w-full">
                <p className="text-[22px] font-medium">Email</p>
                <input
                  type="email"
                  className="h-[53px] w-full rounded-md border border-gray-400 px-2 focus:outline-none"
                />
              </label>
              {/* Password */}
              <label className="mx-auto w-full">
                <p className="text-[22px] font-medium">Password</p>
                <input
                  type="password"
                  className="h-[53px] w-full rounded-md border border-gray-400 px-2 focus:outline-none"
                />
              </label>
            </div>
            {/* Sign Up & Google Button */}
            <div className="mt-[60px] flex flex-col gap-[22px]">
              {/* Sign Up Button */}
              <button className="flex h-[50px] w-[395px] items-center justify-center rounded-full bg-[#F1F192] text-[25px] font-medium">
                Sign Up
              </button>
              <p className="mx-auto text-[22px] font-bold">OR</p>
              {/* Google Continue Button */}
              <button className="flex h-[50px] w-[395px] items-center justify-center gap-[37px] rounded-full border border-gray-400">
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
            <div className="mt-[26px] flex flex-col gap-[17px]">
              <p className="text-center text-[15px]">
                By continuing, you agree to TalkThru{'’'}s <br />
                <span className="font-bold">Terms of Service</span> and
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
          {/* Info Text */}
          <h1 className="max-w-[545px] text-[60px] font-bold">
            Join the TalkThru community now
            <span className="text-[#E4E325]">.</span>
          </h1>
        </div>
      </div>
    </>
  );
};
