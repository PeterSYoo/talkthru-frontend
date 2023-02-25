import { Link } from 'react-router-dom';

export const PostMeetingPage = () => {
    return (
        <>
            <div className="w-full h-full flex flex-row justify-center items-center bg-[#9A9A9A]">
                <div className="h-[765.36px] w-[1360px] flex flex-col justify-center items-center bg-[#FFFFFF] rounded-[16px] p-[56px 0px] gap-[32px] ">
                    <div className="w-[618px] h-[237px] flex flex-col items-center justify-center gap-40px p-0 ">
                        <h2 className="text-[40px] leading-[60px] font-bold text-center">Thank you!</h2>
                        <p className="text-[22px] leading-[33px] text-center">Congratulations on successfully completing your call!</p>
                    </div>
                    <div className="w-[720px] h-[0px] border-2 border-[#E0E4EC]">

                    </div>
                    <div className="w-[692px] h-[351px] flex flex-col items-center p-0 gap-[32px]">
                        <div className="flex flex-col items-center p-[10px] gap-[10px] h-[79px] w-[692px]">
                            <h3 className="font-bold text-[22px] leading-[33px] text-center">Was Jeff helpful?</h3>
                            <p className="text-[18px] leading-[27px] text-center">Your review keeps our small team motivated to make TalkThru even better.</p>
                        </div>
                        <div className="w-[272px] h-[48px] flex flex-row items-start gap-[8px] p-0">
                            <img className="h-[48px] w-[48px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677319394/TalkThru/Post-Meeting%20Page/star_border_avwxo9.png" alt="rating star outline" />
                            <img className="h-[48px] w-[48px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677319394/TalkThru/Post-Meeting%20Page/star_border_avwxo9.png" alt="rating star outline" />
                            <img className="h-[48px] w-[48px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677319394/TalkThru/Post-Meeting%20Page/star_border_avwxo9.png" alt="rating star outline" />
                            <img className="h-[48px] w-[48px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677319394/TalkThru/Post-Meeting%20Page/star_border_avwxo9.png" alt="rating star outline" />
                            <img className="h-[48px] w-[48px]" src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677319394/TalkThru/Post-Meeting%20Page/star_border_avwxo9.png" alt="rating star outline" />
                        </div>
                        <div className="w-[408px] h-[120px] gap-[5px] p-0 border-[#BFBFBF]">
                            <textarea className="w-[408px] h-[120px] gap-[5px] p-[10px] flex flex-col items-start border-[#BFBFBF] border-[2px] text-[#BFBFBF] text-[15px] leading-[22px]" placeholder="Write a review for Jeff (Optional)">
                            </textarea>
                        </div>
                        <Link to="/home" className="text-[24px] leading-[36px]"><button className="w-[408px] h-[48px] rounded-[50px] bg-[#F1F192] flex flex-row justify-center items-center p-[10px] gap-[10px]">Return to home</button></Link>
                    </div>

                </div>
            </div>
        </>
    );
};