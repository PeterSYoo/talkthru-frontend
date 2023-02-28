import { YellowHeader } from "../components/about-page/YellowHeader.components";
import { OurStory } from "../components/about-page/OurStory.components";
import { OurTeam } from "../components/about-page/OurTeam.components";
import { BlueFooter } from "../components/about-page/BlueFooter.components";

export const AboutPage = () => {
    return (
        <>
            <div className="flex flex-col justify-start items-center gap-[48px]">
                <YellowHeader />
                <OurStory />
                <OurTeam />
                <div className="h-[110px] w-[960px] flex flex-row text-center justify-center items-start p-[10px] gap-[10px]">
                    <p className="text-[20px] leading-[30px]">
                        If you feel that our team-oriented approach resonates with you, we would love to connect and explore potential opportunities for collaboration!
                        <br />
                        <span className="font-bold">Please don't hesitate to reach out and connect with us!</span>
                    </p>
                </div>
                <BlueFooter />
            </div>
        </>
    );
};