import { YellowHeader } from "../components/about-page/YellowHeader.components";
import { OurStory } from "../components/about-page/OurStory.components";
import { OurTeam } from "../components/about-page/OurTeam.components";

export const AboutPage = () => {
    return (
        <>
            <div className="flex flex-col justify-start items-center gap-[48px]">
                <YellowHeader />
                <OurStory />
                <OurTeam />

            </div>
        </>
    );
};