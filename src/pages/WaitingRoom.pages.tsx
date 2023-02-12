import { CreateButton } from "../components/CreateButton.components";

export const WaitingRoomPage = () => {
    // Choose subject and experience level for new chat
    // Then loading animation
    // Then match
    // Then navigate to "/room/:id"
    return (
        <>
            <h1>Waiting Room Page</h1>
            <div className="w-full h-full bg-blue-100 flex flex-col justify-center items-center">
                <CreateButton />
            </div>
        </>
    );
};