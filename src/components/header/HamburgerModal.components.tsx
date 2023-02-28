import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const HamburgerModal = ({
  setIsHamburgerOpen,
  menuLocation,
  handleMenuClick,
  handleLogoutClick,
}: {
  setIsHamburgerOpen: (modal: boolean) => void;
  menuLocation: string;
  handleMenuClick: (menuLocation: string) => void;
  handleLogoutClick: (menuLocation: string) => void;
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Set up an event listener that will be triggered when the user clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Check if the modalRef is set and if the clicked element is not a child of the modal
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        // If the clicked element is outside the modal, close the modal
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div
      className="absolute top-[75px] z-10 flex w-[232px] flex-col gap-[64px] bg-white p-[40px]"
      ref={modalRef}
    >
      <div className="flex flex-col gap-[32px]">
        {/* Home - Match me */}
        <Link to="/match-me">
          <button
            onClick={() => handleMenuClick('match me')}
            className="flex items-center gap-[12px]"
          >
            <img
              src={`${
                menuLocation === 'match me'
                  ? 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677466242/TalkThru/Header/Hamburger%20Menu/home-blue_zifebc.png'
                  : 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099675/TalkThru/Header/Hamburger%20Menu/home_work_wthvpk.png'
              }`}
              alt="home"
            />
            <span
              className={`${
                menuLocation === 'match me'
                  ? 'font-bold text-[#4285F4] underline'
                  : 'text-[#17153A]'
              } text-[15px]`}
            >
              Home
            </span>
          </button>
        </Link>
        {/* Profile */}
        <Link to="/profile">
          <button
            onClick={() => handleMenuClick('profile')}
            className="flex items-center gap-[12px]"
          >
            <img
              src={`${
                menuLocation === 'profile'
                  ? 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677466242/TalkThru/Header/Hamburger%20Menu/person-blue_wdju72.png'
                  : 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099675/TalkThru/Header/Hamburger%20Menu/person_wgjs6g.png'
              }`}
              alt="profile"
            />
            <span
              className={`${
                menuLocation === 'profile'
                  ? 'font-bold text-[#4285F4] underline'
                  : 'text-[#17153A]'
              } text-[15px]`}
            >
              Profile
            </span>
          </button>
        </Link>
        {/* Friends */}
        <Link to="/friends">
          <button
            onClick={() => handleMenuClick('friends')}
            className="flex items-center gap-[12px]"
          >
            <img
              src={`${
                menuLocation === 'friends'
                  ? 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677466242/TalkThru/Header/Hamburger%20Menu/friends-blue_nlqdh5.png'
                  : 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099674/TalkThru/Header/Hamburger%20Menu/friends_a9sugd.png'
              }`}
              alt="friends"
            />
            <span
              className={`${
                menuLocation === 'friends'
                  ? 'font-bold text-[#4285F4] underline'
                  : 'text-[#17153A]'
              } text-[15px]`}
            >
              Friends
            </span>
          </button>
        </Link>
        {/* Saved */}
        <Link to="/saved">
          <button
            onClick={() => handleMenuClick('saved')}
            className="flex items-center gap-[12px]"
          >
            <img
              src={`${
                menuLocation === 'saved'
                  ? 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677466242/TalkThru/Header/Hamburger%20Menu/saved-blue_sxcrmq.png'
                  : 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677466395/TalkThru/Header/Hamburger%20Menu/saved-1_qwy8g4.png'
              }`}
            />
            <span
              className={`${
                menuLocation === 'saved'
                  ? 'font-bold text-[#4285F4] underline'
                  : 'text-[#17153A]'
              } text-[15px]`}
            >
              Saved
            </span>
          </button>
        </Link>
        {/* Settings */}
        <Link to="/settings">
          <button
            onClick={() => handleMenuClick('settings')}
            className="flex items-center gap-[12px]"
          >
            <img
              src={`${
                menuLocation === 'settings'
                  ? 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677466242/TalkThru/Header/Hamburger%20Menu/settings-blue_aoixsb.png'
                  : 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099674/TalkThru/Header/Hamburger%20Menu/settings_zzyso6.png'
              }`}
              alt="settings"
            />
            <span
              className={`${
                menuLocation === 'settings'
                  ? 'font-bold text-[#4285F4] underline'
                  : 'text-[#17153A]'
              } text-[15px]`}
            >
              Settings
            </span>
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-[32px]">
        {/* About Us */}
        <Link to="/about">
          <button
            onClick={() => handleMenuClick('about us')}
            className="flex items-center gap-[12px]"
          >
            <img
              src={`${
                menuLocation === 'about us'
                  ? 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677466242/TalkThru/Header/Hamburger%20Menu/about-blue_r3fscg.png'
                  : 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677466395/TalkThru/Header/Hamburger%20Menu/about_kpukfk.png'
              }`}
              alt="about us"
            />
            <span
              className={`${
                menuLocation === 'about us'
                  ? 'font-bold text-[#4285F4] underline'
                  : 'text-[#17153A]'
              } text-[15px]`}
            >
              About Us
            </span>
          </button>
        </Link>
        {/* Privacy Policy */}
        <Link to="/privacy">
          <button
            onClick={() => handleMenuClick('privacy')}
            className="flex items-center gap-[12px]"
          >
            <img
              src={`${
                menuLocation === 'privacy'
                  ? 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677466242/TalkThru/Header/Hamburger%20Menu/privacy-blue_mmel51.png'
                  : 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099674/TalkThru/Header/Hamburger%20Menu/privacy_xuj5vj.png'
              }`}
              alt="privacy policy"
            />
            <span
              className={`${
                menuLocation === 'privacy'
                  ? 'font-bold text-[#4285F4] underline'
                  : 'text-[#17153A]'
              } text-[15px]`}
            >
              Privacy Policy
            </span>
          </button>
        </Link>
        {/* Help */}
        <Link to="/help">
          <button
            onClick={() => handleMenuClick('help')}
            className="flex items-center gap-[12px]"
          >
            <img
              src={`${
                menuLocation === 'help'
                  ? 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677466242/TalkThru/Header/Hamburger%20Menu/help-blue_xn1dvj.png'
                  : 'https://res.cloudinary.com/dryh1nvhk/image/upload/v1677466395/TalkThru/Header/Hamburger%20Menu/help-1_zyhlgd.png'
              }`}
              alt="help"
            />
            <span
              className={`${
                menuLocation === 'help'
                  ? 'font-bold text-[#4285F4] underline'
                  : 'text-[#17153A]'
              } text-[15px]`}
            >
              Help
            </span>
          </button>
        </Link>
      </div>
      <div>
        {/* Logout */}
        <button
          onClick={() => handleLogoutClick('')}
          className="flex items-center gap-[12px]"
        >
          <img
            src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099692/TalkThru/Header/Hamburger%20Menu/logout_1_skbvb3.png"
            alt="help"
          />
          <span className="text-[15px] text-[#17153A]">Log out</span>
        </button>
      </div>
    </div>
  );
};
