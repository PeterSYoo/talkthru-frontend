import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BusinessAndEconomicDevelopment = ({
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
      const newIndex = currentIndex + 4 < 20 ? currentIndex + 4 : 20 - 1;
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
          className="flex items-center p-5 transition-all duration-300"
          ref={sliderRef}
        >
          {/* 1st slide */}
          <SwiperSlide>
            {/* Art */}
            <button
              onClick={() => setSubject('Art')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713158/TalkThru/Choose%20Subject/art_t7upbx.png"
                alt="Art"
              />
              <p className="text-center text-[20px] font-bold">Art</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Philosphy */}
            <button
              onClick={() => setSubject('Philosphy')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713175/TalkThru/Choose%20Subject/philosophy_lwkeaa.png"
                alt="Philosphy"
              />
              <p className="text-center text-[20px] font-bold">Philosphy</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* English */}
            <button
              onClick={() => setSubject('English')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713210/TalkThru/Choose%20Subject/english_kty5kp.png"
                alt="English"
              />
              <p className="text-center text-[20px] font-bold">English</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* International Relations */}
            <button
              onClick={() => setSubject('International Relations')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713222/TalkThru/Choose%20Subject/international_relations_nojoji.png"
                alt="International Relations"
              />
              <p className="text-center text-[20px] font-bold">
                International Relations
              </p>
            </button>
          </SwiperSlide>
          {/* 2nd slide */}
          <SwiperSlide>
            {/* Literature */}
            <button
              onClick={() => setSubject('Literature')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677724556/TalkThru/Choose%20Subject/literature_nkwpfa.png"
                alt="Literature"
              />
              <p className="text-center text-[20px] font-bold">Literature</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Child Development */}
            <button
              onClick={() => setSubject('Child Development')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677724599/TalkThru/Choose%20Subject/child_development_vca87n.png"
                alt="Child Development"
              />
              <p className="text-center text-[20px] font-bold">
                Child Development
              </p>
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
    </>
  );
};
