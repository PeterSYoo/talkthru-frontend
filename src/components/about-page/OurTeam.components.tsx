import { TeamMember } from "./TeamMember.components"

export const OurTeam = () => {
    return (
        <>
            <div className="h-[614px] w-[960px] gap-[32px] flex flex-col items-center">
                <div className="h-[314px] w-[960px] gap-[8px] flex flex-col items-center p-0">
                    <h2 className="text-[25px] font-bold">Our Team</h2>
                    <div className="h-[268px] w-[960px] gap-[32px] p-0 flex flex-row items-start"> 
                        <TeamMember name={"Sofia Torres"} role={"Project Lead"} quote={"“Elevating users and empowering brands.”"} pic={"https://res.cloudinary.com/dryh1nvhk/image/upload/v1677266443/TalkThru/About%20Page/Ellipse_10_tzgoyn.png"} />
                        <TeamMember name={"Charlie-Moshé Elias"} role={"Lead UI/UX Designer"} quote={"“Design is intelligence made visible.”"} pic={"https://res.cloudinary.com/dryh1nvhk/image/upload/v1677266832/TalkThru/About%20Page/Ellipse_10_2_p3n25q.png"}/>
                        <TeamMember name={"Robin Ong"} role={"Lead UI Designer"} quote={"“Design is the foundation of a successful product.”"} pic={"https://res.cloudinary.com/dryh1nvhk/image/upload/v1677266620/TalkThru/About%20Page/Ellipse_10_1_mucsvu.png"}/>
                        <TeamMember name={"Andrew Thacker"} role={"Project Manager"} quote={"“Design is intelligence made visible.”"} pic={"https://res.cloudinary.com/dryh1nvhk/image/upload/v1677266832/TalkThru/About%20Page/Ellipse_10_2_p3n25q.png"}/>
                    </div>
                </div>
                <div className="h-[268px] w-[712px] p-0 gap-[32px] flex flex-row items-center">
                    <TeamMember name={"Peter Yoo"} role={"Full Stack Software Engineer"} quote={"“Design is intelligence made visible.”"} pic={"https://res.cloudinary.com/dryh1nvhk/image/upload/v1677266832/TalkThru/About%20Page/Ellipse_10_2_p3n25q.png"}/>
                    <TeamMember name={"Tyson Gomes"} role={"Full Stack Software Engineer"} quote={"“Design is intelligence made visible.”"} pic={"https://res.cloudinary.com/dryh1nvhk/image/upload/v1677266832/TalkThru/About%20Page/Ellipse_10_2_p3n25q.png"}/>
                    <TeamMember name={"Aryn Parks"} role={"Full Stack Software Engineer"} quote={"“Design is intelligence made visible.”"} pic={"https://res.cloudinary.com/dryh1nvhk/image/upload/v1677266832/TalkThru/About%20Page/Ellipse_10_2_p3n25q.png"}/>
                </div>
            </div>
        </>
    )
}