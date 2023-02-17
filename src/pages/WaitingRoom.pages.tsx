import { CreateButton } from '../components/CreateButton.components';
import { ChooseSubject } from '../components/waiting-room/ChooseSubject.components';

export const WaitingRoomPage = () => {
  // Choose subject and experience level for new chat
  // Then loading animation
  // Then match
  // Then navigate to "/room/:id"
  return (
    <>
      <div className="h-screen w-full font-poppins pt-[88px]">
        {/* Choose a Subject */}
        <ChooseSubject />
        {/*  */}
        {/* <CreateButton /> */}
      </div>
    </>
  );
};
