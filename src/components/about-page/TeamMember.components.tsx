import { PropsWithChildren } from "react"
import { Link } from 'react-router-dom';

export const TeamMember = (props: PropsWithChildren) => {
    return (
        <>
            <div className="h-[268px] w-[216px] flex flex-col items-center p-0 gap-[13px]">
                <img className="h-[120px] w-[120px] rounded-sm" src="" alt="" />
                <p>//</p>
                <p>//</p>
                <div className="h-[24px] w-[61px] flex flex-row items-start p-0 gap-[13px]">
                    <Link to="#"><img className="h-[24px] w-[24px]" /></Link>
                    <Link to="#"><img className= "h-[24px] w-[24px]" /></Link>
                </div>

            </div>
        </>
    )
}