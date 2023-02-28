import { RefObject } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';

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

export const JoinTheTalkThruCommunityNow = ({
  handleScroll,
  bottomRef,
}: {
  handleScroll: () => void;
  bottomRef: RefObject<HTMLDivElement>;
}) => {
  const navigate = useNavigate();

  // Function to handle user sign-up
  const handleUserSignup = async (data: Inputs) => {
    try {
      const response = await fetch(`${server_url}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
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
      <div
        className="flex h-screen w-full items-center justify-center"
        ref={bottomRef}
      >
        <div className="grid grid-cols-[1fr_1fr] gap-[118px] px-5">
          {/* Sign Up Container */}
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register('name')}
                    placeholder="Type something"
                    className="mt-2 h-[48px] w-full rounded-lg border border-gray-400 px-[19px] focus:outline-none"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </label>
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
              {/* Sign Up & Google Button */}
              <div className="flex w-full flex-col gap-[15px]">
                {/* Sign Up Button */}
                <button
                  type="submit"
                  className="flex h-[48px] w-full items-center justify-center rounded-full bg-[#F1F192] text-[22px] font-medium hover:bg-[#E4E325]"
                >
                  Sign Up
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
                    Already registered?&nbsp;
                    <Link to="/login">
                      <span className="font-bold">Login.</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
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
