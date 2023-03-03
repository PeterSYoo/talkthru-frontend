import 'swiper/css';
import { ArtsAndHumanities } from './ArtsAndHumanities.components';
import { BusinessAndEconomicDevelopment } from './BusinessAndEconomicDevelopment.components';
import { STEM } from './STEM.components';
import { TrendingNow } from './TrendingNow.components';

export const ChooseSubject = ({
  setSubject,
}: {
  setSubject: (subject: any) => void;
}) => {
  return (
    <>
      <div className="grid h-screen grid-rows-[440px_1fr_90px]">
        {/* Row 1 */}
        <div className="w-full bg-gradient-to-b from-[#8B8A9C] to-white">
          <div className="mx-auto flex w-full max-w-[1026px] flex-col items-center gap-[31px] px-5 pt-[89px]">
            <h1 className="flex w-full justify-start text-[40px] font-bold leading-[60px]">
              Discover topics
              <br /> for your TalkThru study session
            </h1>
            <p className="text-[20px] font-medium">
              From graphic art to computer science, from legal studies to
              biology, from accounting to physics, TalkThru offers a wide
              variety of academic subjects. Select up to 1 field of study that
              pertains to your desired session.
            </p>
          </div>
        </div>
        {/* Row 2 */}
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[52px] px-5">
          {/* Trending Now Carousel */}
          <TrendingNow setSubject={setSubject} />
          {/* Browse by Subject Type */}
          <div className="flex flex-col items-center gap-[37px] pt-[36px]">
            <p className="text-[27px] font-bold">Browse by Subject Type</p>
          </div>
          {/* Arts and Humanities */}
          <div className="flex flex-col items-center gap-[21px]">
            <p className="flex w-full justify-start text-[22px] font-medium">
              Arts and Humanities
            </p>
            <ArtsAndHumanities setSubject={setSubject} />
          </div>
          {/* Sciences, Math, Engineering, and Technology */}
          <div className="flex flex-col items-center gap-[37px] pt-[36px]">
            <p className="flex w-full justify-start text-[22px] font-medium">
              Sciences, Math, Engineering, and Technology
            </p>
            <STEM setSubject={setSubject} />
          </div>
          {/* Business and Economic Development  */}
          <div className="flex flex-col items-center gap-[37px] pt-[36px]">
            <p className="flex w-full justify-start text-[22px] font-medium">
              Business and Economic Development
            </p>
            <BusinessAndEconomicDevelopment setSubject={setSubject} />
          </div>
        </div>
        {/* Empty Row */}
        <div></div>
      </div>
    </>
  );
};
