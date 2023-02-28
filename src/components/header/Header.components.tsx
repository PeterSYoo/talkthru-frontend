import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HamburgerModal } from './HamburgerModal.components';

export const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [menuLocation, setMenuLocation] = useState<string>('');

  const navigate = useNavigate();

  const location = useLocation();
  const isRoot = location.pathname === '/';
  const isSignup = location.pathname === '/signup';
  const isLogin = location.pathname === '/login';

  const handleMenuClick = (menuLocation: string) => {
    setMenuLocation(menuLocation);
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const handleLogoutClick = (menuLocation: string) => {
    localStorage.removeItem('token'); // Remove the token from local storage
    setMenuLocation(menuLocation);
    setIsHamburgerOpen(!isHamburgerOpen);
    navigate('/login'); // Redirect to the login page
  };

  return (
    <>
      <div
        className={`${
          isRoot && 'absolute top-0 z-10'
        } h-[92px] w-full bg-[#17153A]`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-[50px]">
          <div className="flex w-full max-w-[960px] items-center">
            {!isRoot && !isSignup && !isLogin && (
              <>
                {/* Hamburger Menu opens modal on click */}
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
                    setIsHamburgerOpen={setIsHamburgerOpen}
                    menuLocation={menuLocation}
                    handleMenuClick={handleMenuClick}
                    handleLogoutClick={handleLogoutClick}
                  />
                )}
              </>
            )}
            <div>
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677461654/TalkThru/Header/tt-logo_pyydfe.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="flex items-center gap-[38px] pr-[58px]">
            {/* Conditionally Render Login, Signup, Avatar */}
            {(isLogin || isRoot || isSignup) && (
              <>
                {!isLogin && (
                  <button className="flex h-[48px] w-[148px] items-center justify-center rounded-full bg-[#F1F192] text-[25px] font-medium hover:bg-[#E4E325]">
                    <Link to="/login">Login</Link>
                  </button>
                )}
                {!isSignup && (
                  <button className="flex h-[48px] w-[148px] items-center justify-center rounded-full bg-[#F1F192] text-[25px] font-medium hover:bg-[#E4E325]">
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
