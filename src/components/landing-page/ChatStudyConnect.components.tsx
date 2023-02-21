import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ChatStudyConnect = () => {
  const [chat, setChat] = useState(
    <>
      Chat
      <span className="text-[#E4E325]">.</span>
    </>
  );
  const [study, setStudy] = useState(
    <span className="opacity-0">
      Study
      <span className="text-[#E4E325]">.</span>
    </span>
  );
  const [connect, setConnect] = useState(
    <span className="opacity-0">
      Connect
      <span className="text-[#E4E325]">.</span>
    </span>
  );

  useEffect(() => {
    setTimeout(() => {
      setStudy(
        <span className="opacity-100 transition duration-500">
          Study
          <span className="text-[#E4E325]">.</span>
        </span>
      );
    }, 1000);
    setTimeout(() => {
      setConnect(
        <span className="opacity-100 transition duration-500">
          Connect
          <span className="text-[#E4E325]">.</span>
        </span>
      );
    }, 2000);
  }, []);

  return (
    <>
      <div className="h-screen w-full">
        {/* Main */}
        <div className="flex h-full flex-col bg-white">
          <div className="flex h-full items-center justify-center gap-[129px]">
            {/* Info Text */}
            <div>
              {/* Heading */}
              <h1 className="max-w-[429px] text-[60px] font-bold leading-[70.38px]">
                {chat} {study} {connect}
              </h1>
              {/* Paragraph */}
              <p className="max-w-[509px] pt-[88px] text-[22px] font-medium leading-[25.81px]">
                Need support when it comes to your studies? Want to work things
                through with a peer? Create an account to access our service and
                get connected with someone now!
              </p>
              {/* Sign Up Button */}
              <Link to="/signup"><button className="mt-[47px] flex h-[50px] w-[395px] items-center justify-center rounded-[30px] border-2 border-[#F1F192] bg-[#F1F192] text-[25px] font-medium">
                Sign Up
              </button></Link>
            </div>
            {/* Image */}
            <div>
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329623/TalkThru/Landing%20Page/chat_study_connect_xjuwci.png"
                alt="chat-study-connect"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[21px] pb-[33px]">
            <div>
              <button className="flex h-[65px] w-[65px] justify-center rounded-full bg-[#17153A]">
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676767452/TalkThru/Landing%20Page/down_vector_m7rq5j.png"
                  alt="down-button"
                  className="animate-updown origin-bottom transform"
                />
              </button>
            </div>
            <p className="text-[22px] font-medium">How it Works</p>
          </div>
        </div>
      </div>
    </>
  );
};
