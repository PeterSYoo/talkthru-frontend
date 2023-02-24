import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from '../firebase';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Type for the input fields of the form
type Inputs = {
  name: string;
  email: string;
  password: string;
};

// Type for the form schema
type FormSchemaType = z.infer<typeof FormSchema>;

// Set the URL of the backend server
const server_url = import.meta.env.VITE_BACKEND_URL as string;

// Schema for the form inputs
const FormSchema = z.object({
  name: z.string().refine((value: any) => !/\s/.test(value), {
    message: 'Name must not contain spaces',
  }),
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{1,24}$/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, no spaces, and cannot be longer than 24 characters'
    )
    .max(24),
});

export const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  // Function to handle user sign-up
  const handleUserSignup = async (data: Inputs) => {
    try {
      const result = await fetch(`${server_url}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const response = await result.json();
      console.log(response);
    } catch (error) {
      console.log(error);
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
    handleUserSignup(data);
    // Reset the form and navigate to the login page
    reset;
    navigate('/login');
  };

  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        {/* Create an Account */}
        <div className="shadow-md flex max-h-[888px] w-full max-w-[570px] flex-col rounded-[50px] border border-gray-400 px-[83px] pt-[68px] pb-[34px] shadow-gray-500">
          {/* Heading */}
          <h1 className="mx-auto text-[40px] font-bold leading-[60px]">
            Create an Account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Form Inputs */}
            <div className="mt-[22px] flex flex-col gap-[30px]">
              {/* Name */}
              <label className="mx-auto w-full">
                <p className="text-[22px] font-medium">Name</p>
                <input
                  type="text"
                  value={name}
                  {...register('name')}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="h-[53px] w-full rounded-md border border-gray-400 px-2 focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </label>
              {/* Email */}
              <label className="mx-auto w-full">
                <p className="text-[22px] font-medium">Email</p>
                <input
                  type="email"
                  value={email}
                  {...register('email')}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  {...register('password')}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="h-[53px] w-full rounded-md border border-gray-400 px-2 focus:outline-none"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </label>
            </div>
            {/* Sign Up & Google Button */}
            <div className="mt-[60px] flex flex-col gap-[22px]">
              {/* Sign Up Button */}
              <button
                type="submit"
                className="flex h-[50px] w-[395px] items-center justify-center rounded-full bg-[#F1F192] text-[25px] font-medium"
              >
                Sign Up
              </button>
              <p className="mx-auto text-[22px] font-bold">OR</p>
              {/* Google Continue Button */}
              <span className="flex h-[50px] w-[395px] cursor-pointer items-center justify-center gap-[37px] rounded-full border border-gray-400">
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676338774/TalkThru/Landing%20Page/logos_google-icon_pe5kng.png"
                  alt="google icon"
                />
                <span
                  className="text-[25px] font-medium"
                  onClick={signInWithGoogle}
                >
                  Continue with Google
                </span>
              </span>
            </div>
          </form>
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
