import { CreateButton } from '../components/CreateButton.components';
import { ChooseSubject } from '../components/pre-meeting/ChooseSubject.components';

export const PreMeetingPage = () => {
  // Choose subject and experience level for new chat
  // Then loading animation
  // Then match
  // Then navigate to "/room/:id"
  return (
    <>
      <div className="h-screen w-full font-poppins">
        {/* Choose a Subject */}
        <ChooseSubject />
        {/*  */}
        {/* <CreateButton /> */}
      </div>
    </>
  );
};
