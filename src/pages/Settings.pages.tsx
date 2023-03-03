import { useState, useEffect } from 'react';
import { AccountSettings } from '../components/settings/AccountSettings.components';
import { LoginAndSecurity } from '../components/settings/LoginAndSecurity.components';
import { Notifications } from '../components/settings/Notifications.components';
import { SettingsHeader } from '../components/settings/SettingsHeader.components';
import { Video } from '../components/settings/Video.components';
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



export const SettingsPage = () => {
  const [settingsString, setSettingsString] = useState<string>('Account Setting');
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
  
  const handleProfileUpdate = async (data: ProfileUpdateData, profilePicture?: File) => {
    try {
      const token = localStorage.getItem('token');
      const requestOptions: RequestInit = {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(`${server_url}/profile`, requestOptions);
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
  
  useEffect(() => {
    fetchProfile();
  }, []);
  
  if (!profile) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      <div className="mx-auto grid w-full max-w-[1056px] grid-rows-[39px_1fr] gap-[48px] pt-[32px] pb-[44px]">
        {/* Row 1 */}
        <div>
          <SettingsHeader
            settingsString={settingsString}
            setSettingsString={setSettingsString}
          />
        </div>
        {/* Row 2 */}
        <div>
          {settingsString === 'Account Setting' && <AccountSettings onSubmit={handleProfileUpdate} defaultValues={profile} />}
          {settingsString === 'Login & Security' && <LoginAndSecurity />}
          {settingsString === 'Notifications' && <Notifications />}
          {settingsString === 'Video' && <Video />}
        </div>
      </div>
    </>
  );
};
