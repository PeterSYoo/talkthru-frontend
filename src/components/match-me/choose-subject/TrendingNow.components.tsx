import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const TrendingNow = ({
  setSubject,
}: {
  setSubject: (subject: string) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<null | any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesPerView: 4,
    spaceBetween: 78,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    afterChange: (index: number) => {
      setCurrentIndex(index);
    },
    onSlideChange: (swiper: any) => {
      setCurrentIndex(swiper.activeIndex);
    },
  };

  const previous = () => {
    if (sliderRef.current !== null) {
      const newIndex = currentIndex - 4 >= 0 ? currentIndex - 4 : 0;
      sliderRef.current.swiper.slideTo(newIndex);
      setCurrentIndex(newIndex);
    }
  };

  const next = () => {
    if (sliderRef.current !== null) {
      const newIndex = currentIndex + 4 < 8 ? currentIndex + 4 : 8 - 1;
      sliderRef.current.swiper.slideTo(newIndex);
      setCurrentIndex(newIndex);
    }
  };

  const bulletPoints = Array(Math.ceil(8 / 4))
    .fill(null)
    .map((_, index) => (
      <div
        key={`bullet-${index}`}
        className={`h-[12px] w-[12px] rounded-full transition-all duration-300 ${
          currentIndex === index * 4 ? 'bg-[#17153A]' : 'bg-[#BFBFBF]'
        } ${index === 0 ? 'ml-0' : 'ml-2'}`}
      />
    ));

  return (
    <>
      <div className="swiper-no-swiping flex flex-col items-center gap-[37px] pt-[36px]">
        <p className="text-[27px] font-bold">Trending Now</p>
        <div className="flex w-full items-center gap-[18px]">
          {currentIndex !== 0 && (
            <div>
              <button
                className="flex h-[65px] w-[65px] items-center justify-center rounded-full shadow-[0_5px_3px_0px] shadow-[#BFBFBF] transition-all duration-300"
                onClick={previous}
              >
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713070/TalkThru/Choose%20Subject/left_chevron_lj7o9u.png"
                  alt="left chevron"
                />
              </button>
            </div>
          )}
          <Swiper
            {...settings}
            className="flex items-center p-5"
            ref={sliderRef}
          >
            <SwiperSlide>
              {/* Computer Science */}
              <button
                onClick={() => setSubject('Computer Science')}
                className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
              >
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713113/TalkThru/Choose%20Subject/computer_science_f1dqpb.png"
                  alt="Computer Science"
                />
                <p className="text-center text-[20px] font-bold">
                  Computer Science
                </p>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              {/* Business */}
              <button
                onClick={() => setSubject('Business')}
                className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
              >
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713125/TalkThru/Choose%20Subject/business_auouxr.png"
                  alt="Business"
                />
                <p className="text-center text-[20px] font-bold">Business</p>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              {/* Psychology */}
              <button
                onClick={() => setSubject('Psychology')}
                className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
              >
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677716427/TalkThru/Choose%20Subject/psychology_ssjp4t.png"
                  alt="Psychology"
                />
                <p className="text-center text-[20px] font-bold">Psychology</p>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              {/* Nursing */}
              <button
                onClick={() => setSubject('Nursing')}
                className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
              >
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713142/TalkThru/Choose%20Subject/nursing_yflfbe.png"
                  alt="Nursing"
                />
                <p className="text-center text-[20px] font-bold">Nursing</p>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              {/* Political Science */}
              <button
                onClick={() => setSubject('Political Science')}
                className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
              >
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677716604/TalkThru/Choose%20Subject/political_science_kjktfn.png"
                  alt="Political Science"
                />
                <p className="text-center text-[20px] font-bold">
                  Political Science
                </p>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              {/* Education */}
              <button
                onClick={() => setSubject('Education')}
                className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
              >
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677716624/TalkThru/Choose%20Subject/education_iyjtxi.png"
                  alt="Education"
                />
                <p className="text-center text-[20px] font-bold">Education</p>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              {/* Communications */}
              <button
                onClick={() => setSubject('Communications')}
                className="flex h-[216px] w-[216px] flex-col items-center justify-center rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
              >
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677716639/TalkThru/Choose%20Subject/communications_lmwkj4.png"
                  alt="Communications"
                />
                <p className="text-center text-[20px] font-bold">
                  Communications
                </p>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              {/* Biology */}
              <button
                onClick={() => setSubject('Biology')}
                className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
              >
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677716659/TalkThru/Choose%20Subject/biology_aanfv0.png"
                  alt="Biology"
                />
                <p className="text-center text-[20px] font-bold">Biology</p>
              </button>
            </SwiperSlide>
          </Swiper>
          {currentIndex !== 4 && (
            <div>
              <button
                className="flex h-[65px] w-[65px] items-center justify-center rounded-full shadow-[0_5px_3px_0px] shadow-[#BFBFBF] transition-all duration-300"
                onClick={next}
              >
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677712973/TalkThru/Choose%20Subject/right_chevron_zkaqrl.png"
                  alt="right chevron"
                />
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center">{bulletPoints}</div>
      </div>
    </>
  );
};
