import { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { HamburgerModal } from './HamburgerModal.components';

export const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const location = useLocation();
  const isRoot = location.pathname === '/';
  const isSignup = location.pathname === '/signup';
  const isLogin = location.pathname === '/login';
  const isPreMeet = location.pathname === '/premeet';
  const isSettings = location.pathname === '/settings';

  return (
    <>
      <div
        className={`${
          isRoot && 'absolute top-0 z-10'
        } h-[88px] w-full bg-[#17153A]`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-[50px]">
          <div className="flex w-full max-w-[960px] items-center">
            {!isRoot && !isSignup && !isLogin && (
              <>
                <button
                  className="pl-[24px]"
                  onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                >
                  <img
                    src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677098301/TalkThru/Header/charm_menu-hamburger_asqqpe.png"
                    alt="hamburger"
                  />
                </button>
                {isHamburgerOpen && (
                  <HamburgerModal
                    isHamburgerOpen={isHamburgerOpen}
                    setIsHamburgerOpen={setIsHamburgerOpen}
                  />
                )}
              </>
            )}
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329496/TalkThru/Landing%20Page/TalkThru_logo_zalxz1.png"
              alt="logo"
              className="min-h-[88px] min-w-[203px]"
            />
          </div>
          <div className="flex items-center gap-[38px] pr-[58px]">
            {/* Conditionally Render Login, Signup, Avatar */}
            {!isPreMeet && !isSettings && (
              <>
                {!isLogin && (
                  <button className="flex h-[50px] w-[145px] items-center justify-center rounded-full bg-[#F1F192] text-[25px] font-medium">
                    <Link to="/login">Login</Link>
                  </button>
                )}
                {!isSignup && (
                  <button className="flex h-[50px] w-[145px] items-center justify-center rounded-full border-2 border-[#BFBFBF] bg-[#FFFFFF] text-[25px] font-medium">
                    <Link to="/signup">Sign up</Link>
                  </button>
                )}
              </>
            )}
            {!isRoot && !isSignup && !isLogin && (
              <div className="flex min-w-[288px] items-center gap-[32px]">
                <div>
                  <img
                    src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677048122/TalkThru/Header/add_alert_wrcup4.png"
                    alt="alert"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677048122/TalkThru/Header/mark_chat_unread_inrlss.png"
                    alt="unread chat"
                  />
                </div>
                <div className="flex items-center gap-[15px]">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677048105/TalkThru/Header/toshi_adams_vtreql.png"
                      alt="toshi"
                    />
                  </div>
                  <div className="flex h-full flex-col justify-between text-white">
                    <span className="text-[14px] font-medium">
                      Welcome Back!
                    </span>
                    <span className="text-[16px] font-medium">Toshi Adams</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
