import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileUpdateForm, ProfileUpdateData } from '../components/profile/ProfileUpdateForm.components';


interface Profile {
  id: number;
  picture?: string;
  fullName?: string;
  userName?: string;
  bio?: string;
  birthday?: Date;
  occupation?: string;
  location?: string;
  timeZone?: string;
  phoneNumber?: string;
  email?: string; 
}


// Set the URL of the backend server
const server_url = import.meta.env.VITE_BACKEND_URL as string;


export const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<Profile| null>(null);

  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('TOKEN: ', token);
      const response = await fetch(`${server_url}/profile`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      const result = await response.json();

      if (response.ok) {
        setProfile(result);
      } else {
        console.error(result.message);
      }
    } catch(error) {
      console.log(error)
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div>Loading...</div>
    )
  }

  // return (
  //   <div>
  //     <h1>Profile</h1>
  //     {profile.picture ? <img src={profile.picture}/> : <p>no profile picture</p>}
  //     <p>Username: {profile.userName}</p>
  //     <p>Bio: {profile.bio}</p>
  //     <p>Occupation: {profile.occupation}</p>
  //     <p>Location: {profile.location}</p>
  //     <ProfileUpdateForm onSubmit={handleProfileUpdate} defaultValues={profile} />
  //   </div>
  // )

  return (
    <>
      <div className="grid w-full grid-rows-[176px_104px_25px_1fr]">
        {/* Row 1 */}
        <div className="bg-[url(https://res.cloudinary.com/dryh1nvhk/image/upload/v1677115398/TalkThru/Profile%20Page/Frame_104_pmm46g.png)] bg-center bg-no-repeat">
          <div className="mx-auto flex h-full w-full max-w-[1440px] items-end justify-end">
            <button>
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677115259/TalkThru/Profile%20Page/mode_edit_1_mnrvin.png"
                alt="edit"
              />
            </button>
          </div>
        </div>
        {/* Row 2 */}
        <div className="mx-auto grid w-full max-w-[1028px] grid-cols-[157px_72px_281px_72px_1fr]">
          {/* Column 1 */}
          <div>
            <div className="absolute top-[185px]">
              <img
                src={profile.picture}
                alt="profile picture"
                className="w-[157.9px] h-[157.6px] rounded-[78.8px]"
              />
              <button className="absolute left-[140px] bottom-[5px]" onClick={() => navigate('/settings')}>
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677115259/TalkThru/Profile%20Page/mode_edit_1_mnrvin.png"
                  alt="edit"
                />
              </button>
            </div>
          </div>
          {/* Empty Column 2 */}
          <div></div>
          {/* Column 3 */}
          <div className="flex h-full flex-col justify-end">
            <h1 className="text-[22px] font-bold">{profile.fullName}</h1>
            <span className="text-[15px] font-medium">Member since 2023</span>
            <span className="text-[15px] font-medium">
              {profile.occupation}
            </span>
          </div>
          {/* Empty Column 4 */}
          <div></div>
          {/* Column 5 */}
          <div className="flex h-full flex-col justify-end">
            <div className="flex items-center gap-[4px]">
              {/* Stars */}
              <div>
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/star_kafwfa.png"
                  alt="star"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/star_kafwfa.png"
                  alt="star"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/star_kafwfa.png"
                  alt="star"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/star_half_zsgil4.png"
                  alt="half star"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/star_border_zetu1w.png"
                  alt="empty star"
                />
              </div>
            </div>
            <span className="text-[12px]">Overall rating of 15 total</span>
          </div>
        </div>
        {/* Row 3 */}
        <div></div>
        {/* Row 4 */}
        <div className="mx-auto grid w-full max-w-[1056px] grid-cols-[180px_80px_1fr] pb-[24px]">
          {/* Column 1 */}
          <div className="flex flex-col items-start p-0 gap-[24px] w-[180px] h-[548px]">
            {/* My Skills Section */}
            <div className="flex flex-col p-0 gap-[8px] w-[180px] h-[94px]">
              <div className="flex flex-row justify-between items-center p-0 gap-[38px] w-[180px] h-[24px] bg-[#F1F1F1] border-b-[solid] border-b-[#000000] border-b-[1px]">
                <div className="flex flex-row items-center p-0 gap-[12px] w-[107px] h-[24px]">
                  <img className="w-[24px] h-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/emoji_events_x3rwz1.png" alt="trophy icon" />
                  <p className="w-[71px] h-[24px] font-bold text-[15px] leading-[22px]">My Skills</p>
                </div>
                <img className="w-[21.6] h-[21.6]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677115259/TalkThru/Profile%20Page/mode_edit_1_mnrvin.png" alt="edit icon" />
              </div>
              <div className="w-[180px] h-[62px] p-0 gap-[4px] flex flex-col items-start">
                <div className="flex flex-row items-start w-[180px] h-[18px] border-solid border-[1px] border-[#000000] rounded-[10px] px-[4px] py-0 text-[12px] leading-[18px]">
                  <p className="text-center text-[12px] leading-[18px]">Data analysis and collection</p>
                </div>
                <div className="flex flex-row items-start w-[72px] h-[18px] border-solid border-[1px] border-[#000000] rounded-[10px] px-[4px] py-0 text-[12px] leading-[18px]">
                  <p className="text-center text-[12px] leading-[18px]">Teamwork</p>
                </div>
                <div className="flex flex-row items-start w-[118px] h-[18px] border-solid border-[1px] border-[#000000] rounded-[10px] px-[4px] py-0 text-[12px] leading-[18px]">
                  <p className="text-center text-[12px] leading-[18px]">Attention to detail</p>
                </div>
              </div>
              {/* About Me Section */}
              <div className="h-[266px] w-[180px] flex flex-col items-start p-0 gap-[8px]">
                {/* Header */}
                <div className="flex flex-row justify-between items-center p-0 gap-[38px] w-[180px] h-[24px] bg-[#F1F1F1] border-b-[1px] border-b-[#000000]">
                  <div className="flex flex-row items-center p-0 gap-[12px] w-[111px] h-[24px]">
                    <img className="w-[24px] h-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/person_1_nhxibd.png" alt="person icon" />
                    <p className="w-[75px] h-[24px] font-bold text-[15px] leading-[22px]">About Me</p>
                  </div>
                  <img className="w-[21.6] h-[21.6]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677115259/TalkThru/Profile%20Page/mode_edit_1_mnrvin.png" alt="edit icon" />
                </div>
                {/* Content */}
                <div className="flex flex-col items-start p-0 gap-[4px] w-[180px] h-[234px]">
                  <p className="text-[12px] leading-[18px]">{profile.bio}</p>
                </div>
              </div>

            </div>

          </div>
          {/* Empty Column 2 */}
          <div></div>
          {/* Column 3 */}
          <div className="h-[548px] w-[796px] gap-[8px] p-0 flex flex-col items-start">
            {/* Activity Header */}
            <div className="flex flex-row justify-center items-start p-0 gap-[12px] w-[85px] h-[32px] border-b-[2px] border-b-[#17153A]">
              <h3 className="font-bold text-[15px] leading-[22px]">Activity</h3>
            </div>
            {/* Filter Icons */}
            <div className="flex flex-row justify-center items-center p-0 gap-[8px] w-[100px] h-[24px]">
              <img className="w-[24px] h-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/sort_xyzvlg.png" alt="filter icon" />
              <p className="text-[15px] leading-[22px]" >Filter</p>
              <div className="flex flex-row items-start px-[4px] py-[0px] w-[23px] h-[18px] border-[1px] border-[#000000] rounded-[10px]">
                <p className="text-[12px] leading-[18px]">All</p>
              </div>
            </div>
            {/* Rows of Activity Objects */}

            {/* Container */}
            <div className="flex flex-col items-center p-0 gap-[16px] w-[796px] h-[476px]">
              {/* Single row of info */}
              <div className="flex flex-row justify-between items-center p-0 gap-[32px] w-[790px] h-[58px]">
                <div className="flex flex-col items-start p-0 gap-[4px] w-[104px] h-[58px]">
                    <p className="text-[12px] leading-[18px] h-[36px] w-[104px] font-bold">Today</p>
                    <p className="text-[12px] leading-[18px] h-[36px] w-[47px]">11:20 AM</p>
                    <div className="flex flex-row items-start py-0 px-[4px] w-[74px] h-[18px] border-[1px] border-[#000000] rounded-[10px]">
                      <p className="text-[12px] leading-[18px]">Economics</p>
                    </div>
                </div>
                {/* Middle Text */}
                <div className="flex flex-col items-start p-0 gap-[8px] w-[406px] h-[41px]">
                  <p className="text-[12px] leading-[18px] text-[#4285F4] w-[406px] h-[18px]">Discuss how microeconomic policies impact a country's economy</p>
                  <div className="flex flex-row items-center p-0 gap-[10px] w-[130.52px] h-[15px]">
                    <img className="h-[7.68px] w-[11px] bg-[#323232]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677819794/TalkThru/Profile%20Page/Vector_1_xv9zfy.png" alt="camera icon" />
                    <p className="text-[10px] leading-[15px] text-[#17153A] w-[109px] h-[15px]">Video call 30 minutes</p>
                  </div>
                </div>
                {/* User Pic and Name */}
                <div className="flex flex-row items-center p-0 w-[160px] h-[38px]">
                  <img className="w-[34.37px] h-[34.37px] rounded-[17.184px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/unsplash_h5cd51KXmRQ_fffcex.png" alt="user profile picture" />
                  <div className="flex flex-row items-start p-[10px] gap-[10px] w-[102px] h-[38px]">
                    <p className="h-[18px] w-[82px] text-[12px] leading-[18px]">Jeff Robinson</p>
                  </div>
                </div>
                {/* Heart Icon */}
                <img className="w-[24px] h-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/favorite_1_szoqge.png" alt="like icon" />
              </div>
              {/* next row */}
              <div className="flex flex-row justify-between items-center p-0 gap-[32px] w-[790px] h-[58px]">
                <div className="flex flex-col items-start p-0 gap-[4px] w-[104px] h-[58px]">
                    <p className="text-[12px] leading-[18px] h-[36px] w-[104px] font-bold">February 5</p>
                    <p className="text-[12px] leading-[18px] h-[36px] w-[47px]">11:20 AM</p>
                    <div className="flex flex-row items-start py-0 px-[4px] w-[74px] h-[18px] border-[1px] border-[#000000] rounded-[10px]">
                      <p className="text-[12px] leading-[18px]">Economics</p>
                    </div>
                </div>
                {/* Middle Text */}
                <div className="flex flex-col items-start p-0 gap-[8px] w-[406px] h-[41px]">
                  <p className="text-[12px] leading-[18px] text-[#4285F4] w-[406px] h-[18px]">How money relates to a person's happiness?</p>
                  <div className="flex flex-row items-center p-0 gap-[10px] w-[130.52px] h-[15px]">
                    <img className="h-[7.68px] w-[11px] bg-[#323232]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677819794/TalkThru/Profile%20Page/Vector_1_xv9zfy.png" alt="camera icon" />
                    <p className="text-[10px] leading-[15px] text-[#17153A] w-[109px] h-[15px]">Video call 30 minutes</p>
                  </div>
                </div>
                {/* User Pic and Name */}
                <div className="flex flex-row items-center p-0 w-[160px] h-[38px]">
                  <img className="w-[34.37px] h-[34.37px] rounded-[17.184px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/unsplash_h5cd51KXmRQ_fffcex.png" alt="user profile picture" />
                  <div className="flex flex-row items-start p-[10px] gap-[10px] w-[102px] h-[38px]">
                    <p className="h-[18px] w-[82px] text-[12px] leading-[18px]">Jeff Robinson</p>
                  </div>
                </div>
                {/* Heart Icon */}
                <img className="w-[24px] h-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/favorite_2_psq9hb.png" alt="like icon" />
              </div>
              {/* next row */}
              <div className="flex flex-row justify-between items-center p-0 gap-[32px] w-[790px] h-[58px]">
                <div className="flex flex-col items-start p-0 gap-[4px] w-[104px] h-[58px]">
                    <p className="text-[12px] leading-[18px] h-[36px] w-[104px] font-bold">February 2</p>
                    <p className="text-[12px] leading-[18px] h-[36px] w-[47px]">11:20 AM</p>
                    <div className="flex flex-row items-start py-0 px-[4px] w-[74px] h-[18px] border-[1px] border-[#000000] rounded-[10px]">
                      <p className="text-[12px] leading-[18px]">Economics</p>
                    </div>
                </div>
                {/* Middle Text */}
                <div className="flex flex-col items-start p-0 gap-[8px] w-[406px] h-[41px]">
                  <p className="text-[12px] leading-[18px] text-[#4285F4] w-[406px] h-[18px]">Discuss how Microeconomic policies impact a country's economy</p>
                  <div className="flex flex-row items-center p-0 gap-[10px] w-[130.52px] h-[15px]">
                    <img className="h-[7.68px] w-[11px] bg-[#323232]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677819794/TalkThru/Profile%20Page/Vector_1_xv9zfy.png" alt="camera icon" />
                    <p className="text-[10px] leading-[15px] text-[#17153A] w-[109px] h-[15px]">Video call 30 minutes</p>
                  </div>
                </div>
                {/* User Pic and Name */}
                <div className="flex flex-row items-center p-0 w-[160px] h-[38px]">
                  <img className="w-[44.74px] h-[34.37px] rounded-[17.184px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677821336/TalkThru/Profile%20Page/Frame_125_wg8h6q.png" alt="user profile picture" />
                  <div className="flex flex-row items-start p-[10px] gap-[10px] w-[114px] h-[38px]">
                    <p className="h-[18px] w-[94px] text-[12px] leading-[18px]">Jeff Robinson +</p>
                  </div>
                </div>
                {/* Heart Icon */}
                <img className="w-[24px] h-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/favorite_2_psq9hb.png" alt="like icon" />
              </div>
              {/* next row */}
              <div className="flex flex-row justify-between items-center p-0 gap-[32px] w-[790px] h-[58px]">
                <div className="flex flex-col items-start p-0 gap-[4px] w-[104px] h-[58px]">
                    <p className="text-[12px] leading-[18px] h-[36px] w-[104px] font-bold">January 25</p>
                    <p className="text-[12px] leading-[18px] h-[36px] w-[47px]">11:20 AM</p>
                    <div className="flex flex-row items-start py-0 px-[4px] w-[74px] h-[18px] border-[1px] border-[#000000] rounded-[10px]">
                      <p className="text-[12px] leading-[18px]">Economics</p>
                    </div>
                </div>
                {/* Middle Text */}
                <div className="flex flex-col items-start p-0 gap-[8px] w-[406px] h-[41px]">
                  <p className="text-[12px] leading-[18px] text-[#4285F4] w-[406px] h-[18px]">Gender and the buying potential</p>
                  <div className="flex flex-row items-center p-0 gap-[10px] w-[130.52px] h-[15px]">
                    <img className="h-[7.68px] w-[11px] bg-[#323232]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677819794/TalkThru/Profile%20Page/Vector_1_xv9zfy.png" alt="camera icon" />
                    <p className="text-[10px] leading-[15px] text-[#17153A] w-[109px] h-[15px]">Video call 30 minutes</p>
                  </div>
                </div>
                {/* User Pic and Name */}
                <div className="flex flex-row items-center p-0 w-[160px] h-[38px]">
                  <img className="w-[44.74px] h-[34.37px] rounded-[17.184px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677821336/TalkThru/Profile%20Page/Frame_125_wg8h6q.png" alt="user profile picture" />
                  <div className="flex flex-row items-start p-[10px] gap-[10px] w-[114px] h-[38px]">
                    <p className="h-[18px] w-[94px] text-[12px] leading-[18px]">Jeff Robinson +</p>
                  </div>
                </div>
                {/* Heart Icon */}
                <img className="w-[24px] h-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/favorite_2_psq9hb.png" alt="like icon" />
              </div>
              {/* next row */}
              <div className="flex flex-row justify-between items-center p-0 gap-[32px] w-[790px] h-[58px]">
                <div className="flex flex-col items-start p-0 gap-[4px] w-[104px] h-[58px]">
                    <p className="text-[12px] leading-[18px] h-[36px] w-[104px] font-bold">January 20</p>
                    <p className="text-[12px] leading-[18px] h-[36px] w-[47px]">11:20 AM</p>
                    <div className="flex flex-row items-start py-0 px-[4px] w-[74px] h-[18px] border-[1px] border-[#000000] rounded-[10px]">
                      <p className="text-[12px] leading-[18px]">Economics</p>
                    </div>
                </div>
                {/* Middle Text */}
                <div className="flex flex-col items-start p-0 gap-[8px] w-[406px] h-[41px]">
                  <p className="text-[12px] leading-[18px] text-[#4285F4] w-[406px] h-[18px]">Perfect competition in microeconomics</p>
                  <div className="flex flex-row items-center p-0 gap-[10px] w-[130.52px] h-[15px]">
                    <img className="h-[7.68px] w-[11px] bg-[#323232]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677819794/TalkThru/Profile%20Page/Vector_1_xv9zfy.png" alt="camera icon" />
                    <p className="text-[10px] leading-[15px] text-[#17153A] w-[109px] h-[15px]">Video call 30 minutes</p>
                  </div>
                </div>
                {/* User Pic and Name */}
                <div className="flex flex-row items-center p-0 w-[160px] h-[38px]">
                  <img className="w-[44.74px] h-[34.37px] rounded-[17.184px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677821336/TalkThru/Profile%20Page/Frame_125_wg8h6q.png" alt="user profile picture" />
                  <div className="flex flex-row items-start p-[10px] gap-[10px] w-[114px] h-[38px]">
                    <p className="h-[18px] w-[94px] text-[12px] leading-[18px]">Jeff Robinson +</p>
                  </div>
                </div>
                {/* Heart Icon */}
                <img className="w-[24px] h-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/favorite_2_psq9hb.png" alt="like icon" />
              </div>
              {/* next row */}
              <div className="flex flex-row justify-between items-center p-0 gap-[32px] w-[790px] h-[58px]">
                <div className="flex flex-col items-start p-0 gap-[4px] w-[104px] h-[58px]">
                    <p className="text-[12px] leading-[18px] h-[36px] w-[104px] font-bold">January 20</p>
                    <p className="text-[12px] leading-[18px] h-[36px] w-[47px]">11:20 AM</p>
                    <div className="flex flex-row items-start py-0 px-[4px] w-[74px] h-[18px] border-[1px] border-[#000000] rounded-[10px]">
                      <p className="text-[12px] leading-[18px]">Economics</p>
                    </div>
                </div>
                {/* Middle Text */}
                <div className="flex flex-col items-start p-0 gap-[8px] w-[406px] h-[41px]">
                  <p className="text-[12px] leading-[18px] text-[#4285F4] w-[406px] h-[18px]">Perfect competition in microeconomics</p>
                  <div className="flex flex-row items-center p-0 gap-[10px] w-[130.52px] h-[15px]">
                    <img className="h-[7.68px] w-[11px] bg-[#323232]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677819794/TalkThru/Profile%20Page/Vector_1_xv9zfy.png" alt="camera icon" />
                    <p className="text-[10px] leading-[15px] text-[#17153A] w-[109px] h-[15px]">Video call 30 minutes</p>
                  </div>
                </div>
                {/* User Pic and Name */}
                <div className="flex flex-row items-center p-0 w-[160px] h-[38px]">
                  <img className="w-[44.74px] h-[34.37px] rounded-[17.184px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677821336/TalkThru/Profile%20Page/Frame_125_wg8h6q.png" alt="user profile picture" />
                  <div className="flex flex-row items-start p-[10px] gap-[10px] w-[114px] h-[38px]">
                    <p className="h-[18px] w-[94px] text-[12px] leading-[18px]">Jeff Robinson +</p>
                  </div>
                </div>
                {/* Heart Icon */}
                <img className="w-[24px] h-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/favorite_2_psq9hb.png" alt="like icon" />
              </div>

              {/* Bottom Page Nav */}
              {/* <div className="flex flex-row items-start p-0 w-[272px] h-[32px]"> */}
                {/* Back Arrow Icon */}
                {/* <div className="w-[32px] h-[32px] bg-[#919EAB] flex flex-row justify-center items-center text-[#C4CDD5]">
                  {"<"}
                </div>
                <div className="w-[32px] h-[32px] border-[#4285F4] rounded-[4px] text-[#4285F4] text-[14px] leading-[20px]">
                  1
                </div> */}


              {/* </div> */}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
