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
        } h-[88px] w-full bg-[#17153A]`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-[50px]">
          <div className="flex w-full max-w-[960px] items-center">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329496/TalkThru/Landing%20Page/TalkThru_logo_zalxz1.png"
                alt="logo"
                className="min-h-[88px] min-w-[203px]"
              />
            </Link>
            {!isRoot && !isSignup && !isLogin && (
              <div className="flex h-[40px] w-full max-w-[757px] items-center gap-[7px] rounded-full bg-white pl-[14px] pr-[18px]">
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
          <div className="flex items-center gap-[38px] pr-[58px]">
            {/* Conditionally Render Login, Signup, Avatar */}
            {!isPreMeet && (
              <>
                {!isLogin && (
                  <button className="flex h-[50px] w-[145px] items-center justify-center rounded-full bg-[#F1F192] text-[25px] font-medium">
                    <Link to="/login">Login</Link>
                  </button>
                )}
                {!isSignup && (
                  <button className="flex h-[50px] w-[145px] items-center justify-center rounded-full bg-[#F1F192] text-[25px] font-medium">
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
