import { PropsWithChildren } from "react"
import { Link } from 'react-router-dom';

type TeamMemberProps = {
    name: string,
    role: string,
    quote: string,
    pic: string,
    linkedIn: string
};

export const TeamMember: React.FC<TeamMemberProps> = ({ name, role, quote, pic, linkedIn }) => {

    return (
        <>
            <div className="h-[268px] w-[216px] flex flex-col items-center p-0 gap-[13px]">
                <img className="h-[120px] w-[120px] rounded-sm" src={pic} alt={`Picture of ${name}`} />
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[20px] font-bold leading-[30px] text-center">{name}</p>
                    <p className="text-[15px] font-bold leading-[22.5px] text-center">{role}</p>
                    <p className="text-[15px] leading-[22.5px] text-center">{quote}</p>
                </div>
                <div className="h-[24px] w-[61px] flex flex-row items-start p-0 gap-[13px]">
                    <Link to={linkedIn} target="_blank"><img className="h-[24px] w-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677221268/TalkThru/About%20Page/Vector_jtszps.png" alt="LinkedIn Icon" /></Link>
                    <Link to="#" target="_blank"><img className= "h-[24px] w-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677221340/TalkThru/About%20Page/share_ctqvha.png" alt="Share Icon" /></Link>
                </div>
            </div>
        </>
    )
}