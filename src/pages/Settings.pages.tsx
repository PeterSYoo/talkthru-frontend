import { useState } from 'react';
import { AccountSettings } from '../components/settings/AccountSettings.components';
import { LoginAndSecurity } from '../components/settings/LoginAndSecurity.components';
import { Notifications } from '../components/settings/Notifications.components';
import { SettingsHeader } from '../components/settings/SettingsHeader.components';
import { Video } from '../components/settings/Video.components';

export const SettingsPage = () => {
  const [settingsString, setSettingsString] =
    useState<string>('Account Setting');

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
          {settingsString === 'Account Setting' && <AccountSettings />}
          {settingsString === 'Login & Security' && <LoginAndSecurity />}
          {settingsString === 'Notifications' && <Notifications />}
          {settingsString === 'Video' && <Video />}
        </div>
      </div>
    </>
  );
};
