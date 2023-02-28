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
})

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
      <div className="flex h-full w-full items-center justify-center">
        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow-md flex max-h-[888px] w-full max-w-[570px] flex-col rounded-[50px] border border-gray-400 px-[83px] pt-[68px] pb-[34px] shadow-gray-500">
            {/* Heading */}
            <h1 className="text-[40px] font-bold leading-[60px]">Login</h1>
            {/* Form Inputs */}
            <div className="mt-[22px] flex flex-col gap-[30px]">
              {/* Email */}
              <label className="mx-auto w-full">
                <p className="text-[22px] font-medium">Email</p>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="Email Address"
                  className="h-[53px] w-full rounded-md border border-gray-400 px-2 focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </label>
              {/* Password */}
              <label className="mx-auto w-full">
                <p className="text-[22px] font-medium">Password</p>
                <input
                  type="password"
                  {...register('password')}
                  placeholder="Password"
                  className="h-[53px] w-full rounded-md border border-gray-400 px-2 focus:outline-none"
                />
                <Link to="/reset">
                  <p className="pt-1 text-[15px] font-medium">
                    Forgot your password?
                  </p>
                </Link>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </label>
            </div>
            {/* Login & Google Button */}
            <div className="mt-[60px] flex flex-col gap-[22px]">
              {/* Login Button */}
              <button
                type="submit"
                className="flex h-[50px] w-[395px] items-center justify-center rounded-full bg-[#F1F192] text-[25px] font-medium"
              >
                Login
              </button>
              <p className="mx-auto text-[22px] font-bold">OR</p>
              {/* Google Continue Button */}
              <span
                onClick={signInWithGoogle}
                className="flex h-[50px] w-[395px] cursor-pointer items-center justify-center gap-[37px] rounded-full border border-gray-400"
              >
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676338774/TalkThru/Landing%20Page/logos_google-icon_pe5kng.png"
                  alt="google icon"
                />
                <span className="text-[25px] font-medium">
                  Sign in with Google
                </span>
              </span>
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
                Don't have an account yet?&nbsp;
                <span className="font-bold">
                  <Link to="/signup">Register here.</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
