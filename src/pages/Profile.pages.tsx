import { useEffect, useState } from 'react';
import { ProfileUpdateForm, ProfileUpdateData } from '../components/profile/ProfileUpdateForm.components';


interface Profile {
  id: number;
  picture?: string;
  userName?: string;
  bio?: string;
  occupation?: string;
  location?: string;
}


// Set the URL of the backend server
const server_url = import.meta.env.VITE_BACKEND_URL as string;


export const ProfilePage: React.FC = () => {
const [profile, setProfile] = useState<Profile| null>(null);

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

const handleProfileUpdate = async (data: ProfileUpdateData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${server_url}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();

    if (response.ok) {
      setProfile(result);
    } else {
      console.error(result.message);
    }

  } catch(error) {
    console.log(error);
  }
}

// const [ picture, setPicture ] = useState('');
// const [ userName, setUserName ] = useState('');
// const [ bio, setBio ] = useState('');
// const [ occupation, setOccupation ] = useState('');
// const [ location, setLocation ] = useState('');

// const updatedProfile = {
//   picture,
//   userName,
//   bio,
//   occupation,
//   location,
// }

// const updateProfile = async () => {
//   try {
//     const response = await fetch('/profile', {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({userId: userId, ...updatedProfile})
//     });
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {profile.userName}</p>
      <p>Bio: {profile.bio}</p>
      <p>Occupation: {profile.occupation}</p>
      <p>Location: {profile.location}</p>
      <ProfileUpdateForm onSubmit={handleProfileUpdate} defaultValues={profile} />
    </div>
  )

  // return (
  //   <>
  //     <div className="grid w-full grid-rows-[176px_104px_25px_1fr]">
  //       {/* Row 1 */}
  //       <div className="bg-[url(https://res.cloudinary.com/dryh1nvhk/image/upload/v1677115398/TalkThru/Profile%20Page/Frame_104_pmm46g.png)] bg-center bg-no-repeat">
  //         <div className="mx-auto flex h-full w-full max-w-[1440px] items-end justify-end">
  //           <button>
  //             <img
  //               src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677115259/TalkThru/Profile%20Page/mode_edit_1_mnrvin.png"
  //               alt="edit"
  //             />
  //           </button>
  //         </div>
  //       </div>
  //       {/* Row 2 */}
  //       <div className="mx-auto grid w-full max-w-[1028px] grid-cols-[157px_72px_281px_72px_1fr]">
  //         {/* Column 1 */}
  //         <div>
  //           <div className="absolute top-[185px]">
  //             <img
  //               src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677115054/TalkThru/Profile%20Page/profile_picture_fhzqon.png"
  //               alt="profile picture"
  //             />
  //             <button className="absolute left-[140px] bottom-[5px]">
  //               <img
  //                 src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677115259/TalkThru/Profile%20Page/mode_edit_1_mnrvin.png"
  //                 alt="edit"
  //               />
  //             </button>
  //           </div>
  //         </div>
  //         {/* Empty Column 2 */}
  //         <div></div>
  //         {/* Column 3 */}
  //         <div className="flex h-full flex-col justify-end">
  //           <h1 className="text-[22px] font-bold">Toshi Adams</h1>
  //           <span className="text-[15px] font-medium">Member since 2023</span>
  //           <span className="text-[15px] font-medium">
  //             Student at Wiscosin University
  //           </span>
  //         </div>
  //         {/* Empty Column 4 */}
  //         <div></div>
  //         {/* Column 5 */}
  //         <div className="flex h-full flex-col justify-end">
  //           <div className="flex items-center gap-[4px]">
  //             {/* Stars */}
  //             <div>
  //               <img
  //                 src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/star_kafwfa.png"
  //                 alt="star"
  //               />
  //             </div>
  //             <div>
  //               <img
  //                 src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/star_kafwfa.png"
  //                 alt="star"
  //               />
  //             </div>
  //             <div>
  //               <img
  //                 src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/star_kafwfa.png"
  //                 alt="star"
  //               />
  //             </div>
  //             <div>
  //               <img
  //                 src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/star_half_zsgil4.png"
  //                 alt="half star"
  //               />
  //             </div>
  //             <div>
  //               <img
  //                 src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677113225/TalkThru/Profile%20Page/star_border_zetu1w.png"
  //                 alt="empty star"
  //               />
  //             </div>
  //           </div>
  //           <span className="text-[12px]">Overall rating of 15 total</span>
  //         </div>
  //       </div>
  //       {/* Row 3 */}
  //       <div></div>
  //       {/* Row 4 */}
  //       <div className="mx-auto grid w-full max-w-[1056px] grid-cols-[180px_80px_1fr] pb-[24px]">
  //         {/* Column 1 */}
  //         <div className="bg-blue-100"></div>
  //         {/* Empty Column 2 */}
  //         <div></div>
  //         {/* Column 3 */}
  //         <div className="bg-blue-100"></div>
  //       </div>
  //     </div>
  //   </>
  // );
};
