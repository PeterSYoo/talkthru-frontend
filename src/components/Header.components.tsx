import { Link, Route, Routes, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const isRoot = location.pathname === '/';
  const isSignup = location.pathname === '/signup';
  const isLogin = location.pathname === '/login';
  const isPreMeet = location.pathname === '/premeet';

  return (
    <>
      <div
        className={`${
          isRoot && 'absolute top-0 z-10'
        } bg-[#17153A] w-full h-[88px]`}
      >
        <div className="max-w-[1440px] w-full flex justify-between items-center mx-auto gap-[50px]">
          <div className="flex items-center w-full max-w-[960px]">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329496/TalkThru/Landing%20Page/TalkThru_logo_zalxz1.png"
                alt="logo"
                className="min-w-[203px] min-h-[88px]"
              />
            </Link>
            {!isRoot && !isSignup && !isLogin && (
              <div className="max-w-[757px] w-full h-[40px] bg-white rounded-full flex items-center pl-[14px] gap-[7px] pr-[18px]">
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676779361/TalkThru/Header/material-symbols_search-rounded_wvkjwa.png"
                  alt="search"
                />
                <input
                  type="text"
                  className="h-full w-full placeholder:text-[20px] placeholder:font-medium focus:outline-none"
                  placeholder="Search a field of study"
                />
              </div>
            )}
          </div>
          <div className="pr-[58px] flex items-center gap-[38px]">
            {/* Conditionally Render Login, Signup, Avatar */}
            {!isPreMeet && (
              <>
                {!isLogin && (
                  <button className="flex justify-center items-center h-[50px] w-[145px] bg-[#F1F192] text-[25px] font-medium rounded-full">
                    <Link to="/login">Login</Link>
                  </button>
                )}
                {!isSignup && (
                  <button className="flex justify-center items-center h-[50px] w-[145px] bg-[#F1F192] text-[25px] font-medium rounded-full">
                    <Link to="/signup">Sign Up</Link>
                  </button>
                )}
              </>
            )}
            {!isRoot && !isSignup && !isLogin && (
              <button>
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676778648/TalkThru/Header/avatar-h_fpx2qx.png"
                  alt="avatar"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
