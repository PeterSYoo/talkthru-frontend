import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle, logInWithEmailAndPassword } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import * as z from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Prisma } from '@prisma/client';
import { UserContext } from '../contexts/UserContext';
import { updateCurrentUser } from 'firebase/auth';

// Type for the input fields of the form
type Inputs = {
  email: string;
  password: string;
};

// Type for the form schema
type FormSchemaType = z.infer<typeof FormSchema>;

// Set the URL of the backend server
const server_url = import.meta.env.VITE_BACKEND_URL as string;

// Schema for the form inputs
const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().max(24),
});

export const LoginPage = () => {
  const navigate = useNavigate();

  // Function to handle user login
  const handleLoginSubmit = async (data: Inputs) => {
    try {
      const response = await fetch(`${server_url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('token', result.token);
        navigate('/match-me');
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Use the useForm hook to handle the form state and validation
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormSchemaType>({ resolver: zodResolver(FormSchema) });

  // Form submission handler
  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
    // Call the handleUserSignup function to create a new user
    handleLoginSubmit(data);
    // Reset the form and navigate to the login page
    reset;
  };

  return (
    <>
      <div className="flex h-full w-full items-center justify-center px-5">
        {/* Login Container */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full max-w-[550px] flex-col gap-[32px] rounded-[50px] px-[71px] py-[43px] shadow-[4px_4px_3px_5px] shadow-[#BFBFBF]">
            {/* Form Inputs */}
            <div className="mt-[22px] flex w-full flex-col gap-[19px]">
              {/* Sign Up */}
              <h1 className="text-[32px] font-bold">Login</h1>
              {/* Email */}
              <label className="mx-auto w-full">
                <p className="text-[15px] font-medium">Email</p>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="Type something"
                  className="mt-2 h-[48px] w-full rounded-lg border border-gray-400 px-[19px] focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </label>
              {/* Password */}
              <label className="mx-auto w-full">
                <p className="text-[15px] font-medium">Password</p>
                <input
                  type="password"
                  {...register('password')}
                  placeholder="Type something"
                  className="mt-2 h-[48px] w-full rounded-lg border border-gray-400 px-[19px] placeholder:text-[15px] placeholder:font-medium focus:outline-none"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </label>
            </div>
            {/* Login & Google Button */}
            <div className="flex w-full flex-col gap-[15px]">
              {/* Login Button */}
              <button
                type="submit"
                className="flex h-[48px] w-full items-center justify-center rounded-full bg-[#F1F192] text-[22px] font-medium hover:bg-[#E4E325]"
              >
                Login
              </button>
              <p className="mx-auto text-[22px] font-bold">OR</p>
              {/* Google Continue Button */}
              <span className="flex h-[50px] w-full cursor-pointer items-center justify-center gap-[37px] rounded-full border border-gray-400 hover:bg-[#8B8A9C]">
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676338774/TalkThru/Landing%20Page/logos_google-icon_pe5kng.png"
                  alt="google icon"
                />
                <span className="text-[22px] font-medium">
                  Continue with Google
                </span>
              </span>
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
                  Not registered yet?&nbsp;
                  <Link to="/signup">
                    <span className="font-bold">Sign Up.</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
