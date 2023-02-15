import { ChatStudyConnect } from '../components/landing-page/ChatStudyConnect.components';
import { EnjoyYourSession } from '../components/landing-page/EnjoyYourSession.components';
import { GetMatched } from '../components/landing-page/GetMatched.components';
import { JoinTheTalkThruCommunityNow } from '../components/landing-page/JoinTheTalkThruCommunityNow.components';
import { SearchForASubject } from '../components/landing-page/SearchForASubject.components';

export const SplashPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center font-poppins">
        {/* Chat Study Connect */}
        <ChatStudyConnect />
        {/* Search for a subject */}
        <SearchForASubject />
        {/* Get matched */}
        <GetMatched />
        {/* Enjoy your session */}
        <EnjoyYourSession />
        {/* Join the TalkThru community now */}
        <JoinTheTalkThruCommunityNow />
      </div>
    </>
  );
};