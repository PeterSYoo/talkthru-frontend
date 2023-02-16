import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle, logInWithEmailAndPassword } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/home');
  }, [user, loading]);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center font-poppins pt-[88px]">
        {/* Login Form */}
        <div className="flex flex-col max-w-[570px] max-h-[888px] w-full border border-gray-400 rounded-[50px] shadow-md shadow-gray-500 pt-[68px] pb-[34px] px-[83px]">
          {/* Heading */}
          <h1 className="text-[40px] leading-[60px] font-bold">Login</h1>
          {/* Form Inputs */}
          <div className="flex flex-col gap-[30px] mt-[22px]">
            {/* Email */}
            <label className="mx-auto w-full">
              <p className="text-[22px] font-medium">Email</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full border border-gray-400 rounded-md h-[53px] focus:outline-none px-2"
              />
            </label>
            {/* Password */}
            <label className="mx-auto w-full">
              <p className="text-[22px] font-medium">Password</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border border-gray-400 rounded-md h-[53px] focus:outline-none px-2"
              />
              <p className="text-[15px] font-medium pt-1">
                Forgot your password?
              </p>
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
              <span className="font-bold">
                <Link to="/login">Login.</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
