import { PropsWithChildren } from "react"
import { Link } from 'react-router-dom';

export const TeamMember = (props: PropsWithChildren) => {
    return (
        <>
            <div className="h-[268px] w-[216px] flex flex-col items-center p-0 gap-[13px]">
                <img className="h-[120px] w-[120px] rounded-sm" src="" alt="" />
                <p className="text-[20px] font-bold leading-[30px]">Name</p>
                <p className="text-[15px] font-bold leading-[22.5px]">Role</p>
                <p className="text-[15px] leading-[22.5px]">Quote</p>
                <div className="h-[24px] w-[61px] flex flex-row items-start p-0 gap-[13px]">
                    <Link to="#"><img className="h-[24px] w-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677221268/TalkThru/About%20Page/Vector_jtszps.png" alt="LinkedIn Icon" /></Link>
                    <Link to="#"><img className= "h-[24px] w-[24px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677221340/TalkThru/About%20Page/share_ctqvha.png" alt="Share Icon" /></Link>
                </div>

            </div>
        </>
    )
}