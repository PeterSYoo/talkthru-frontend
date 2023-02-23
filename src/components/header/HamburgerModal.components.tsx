import { Link } from 'react-router-dom';

export const HamburgerModal = ({
  isHamburgerOpen,
  setIsHamburgerOpen,
}: {
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: (modal: boolean) => void;
}) => {
  return (
    <div className="absolute top-[75px] z-10 flex w-[184px] flex-col gap-[64px] bg-white px-[16px] py-[8px]">
      <div className="flex flex-col gap-[32px]">
        {/* Home */}
        <button className="flex items-center gap-[12px]">
          <img
            src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099675/TalkThru/Header/Hamburger%20Menu/home_work_wthvpk.png"
            alt="home"
          />
          <span className="text-[15px] text-[#17153A]">Home</span>
        </button>
        {/* Profile */}
        <Link to="/profile">
          <button
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            className="flex items-center gap-[12px]"
          >
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099675/TalkThru/Header/Hamburger%20Menu/person_wgjs6g.png"
              alt="profile"
            />
            <span className="text-[15px] text-[#17153A]">Profile</span>
          </button>
        </Link>
        {/* Friends */}
        <button className="flex items-center gap-[12px]">
          <img
            src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099674/TalkThru/Header/Hamburger%20Menu/friends_a9sugd.png"
            alt="friends"
          />
          <span className="text-[15px] text-[#17153A]">Friends</span>
        </button>
        {/* Saved */}
        <button className="flex items-center gap-[12px]">
          <img
            src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099674/TalkThru/Header/Hamburger%20Menu/saved_wx0odw.png"
            alt="saved"
          />
          <span className="text-[15px] text-[#17153A]">Saved</span>
        </button>
        {/* Settings */}
        <Link to="/settings">
          <button
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            className="flex items-center gap-[12px]"
          >
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099674/TalkThru/Header/Hamburger%20Menu/settings_zzyso6.png"
              alt="settings"
            />
            <span className="text-[15px] text-[#17153A]">Settings</span>
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-[32px]">
        {/* About Us */}
        <button className="flex items-center gap-[12px]">
          <img
            src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099674/TalkThru/Header/Hamburger%20Menu/about_us_ibpsg4.png"
            alt="about us"
          />
          <span className="text-[15px] text-[#17153A]">About Us</span>
        </button>
        {/* Privacy Policy */}
        <button className="flex items-center gap-[12px]">
          <img
            src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099674/TalkThru/Header/Hamburger%20Menu/privacy_xuj5vj.png"
            alt="privacy policy"
          />
          <span className="text-[15px] text-[#17153A]">Privacy Policy</span>
        </button>
        {/* Help */}
        <button className="flex items-center gap-[12px]">
          <img
            src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677099674/TalkThru/Header/Hamburger%20Menu/help_mbiqsj.png"
            alt="help"
          />
          <span className="text-[15px] text-[#17153A]">Help</span>
        </button>
      </div>
      <div>
        {/* Logout */}
        <button className="flex items-center gap-[12px]">
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
