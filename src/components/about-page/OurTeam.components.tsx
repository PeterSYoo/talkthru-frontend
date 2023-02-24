import { TeamMember } from "./TeamMember.components"

export const OurTeam = () => {
    return (
        <>
            <div className="h-[614px] w-[960px] gap-[32px] flex flex-col items-center">
                <div className="h-[314px] w-[960px] gap-[8px] flex flex-col items-center p-0">
                    <h2 className="text-[25px] font-bold">Our Team</h2>
                    <div className="h-[268px] w-[960px] gap-[32px] p-0 flex flex-row items-start"> 
                        <TeamMember />
                        <TeamMember />
                        <TeamMember />
                        <TeamMember />
                    </div>
                </div>
                <div className="h-[268px] w-[712px] p-0 gap-[32px] flex flex-row items-center">
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                </div>
            </div>
        </>
    )
}