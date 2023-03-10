import { useRef } from 'react';
import { Header } from '../components/header/Header.components';
import { ChatStudyConnect } from '../components/landing-page/ChatStudyConnect.components';
import { EnjoyYourSession } from '../components/landing-page/EnjoyYourSession.components';
import { GetMatched } from '../components/landing-page/GetMatched.components';
import { JoinTheTalkThruCommunityNow } from '../components/landing-page/JoinTheTalkThruCommunityNow.components';
import { SearchForASubject } from '../components/landing-page/SearchForASubject.components';

export const LandingPage = () => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* Header */}
        <Header />
        {/* Chat Study Connect */}
        <ChatStudyConnect handleScroll={handleScroll} />
        {/* Search for a subject */}
        <SearchForASubject />
        {/* Get matched */}
        <GetMatched />
        {/* Enjoy your session */}
        <EnjoyYourSession />
        {/* Join the TalkThru community now */}
        <JoinTheTalkThruCommunityNow
          handleScroll={handleScroll}
          bottomRef={bottomRef}
        />
      </div>
    </>
  );
};
