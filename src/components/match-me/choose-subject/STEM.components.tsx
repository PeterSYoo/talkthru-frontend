import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const STEM = ({
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

  const bulletPoints = Array(Math.ceil(16 / 4))
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
        <Swiper {...settings} className="flex items-center p-5" ref={sliderRef}>
          {/* 1st slide */}
          <SwiperSlide>
            {/* Biomedial Sciences */}
            <button
              onClick={() => setSubject('Biomedial Sciences')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713256/TalkThru/Choose%20Subject/biomedical_sciences_jvwhai.png"
                alt="Biomedial Sciences"
              />
              <p className="text-center text-[20px] font-bold">
                Biomedial Sciences
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Neuroscience */}
            <button
              onClick={() => setSubject('Neuroscience')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713285/TalkThru/Choose%20Subject/neuroscience_pr2yvs.png"
                alt="Neuroscience"
              />
              <p className="text-center text-[20px] font-bold">Neuroscience</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Mathematics */}
            <button
              onClick={() => setSubject('Mathematics')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713304/TalkThru/Choose%20Subject/mathematics_khf8jx.png"
                alt="Mathematics"
              />
              <p className="text-center text-[20px] font-bold">Mathematics</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Physics */}
            <button
              onClick={() => setSubject('Physics')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677713318/TalkThru/Choose%20Subject/physics_pln1b1.png"
                alt="Physics"
              />
              <p className="text-center text-[20px] font-bold">Physics</p>
            </button>
          </SwiperSlide>
          {/* 2nd slide */}
          <SwiperSlide>
            {/* Environmental Science */}
            <button
              onClick={() => setSubject('Environmental Science')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677730800/TalkThru/Choose%20Subject/environmental_science_ujwatx.png"
                alt="Environmental Science"
              />
              <p className="text-center text-[20px] font-bold">
                Environmental Science
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Geology */}
            <button
              onClick={() => setSubject('Geology')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677730813/TalkThru/Choose%20Subject/geology_yl9b3y.png"
                alt="Geology"
              />
              <p className="text-center text-[20px] font-bold">Geology</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Animal Science */}
            <button
              onClick={() => setSubject('Animal Science')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677730826/TalkThru/Choose%20Subject/animal_science_beszk2.png"
                alt="Animal Science"
              />
              <p className="text-center text-[20px] font-bold">
                Animal Science
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Engineering */}
            <button
              onClick={() => setSubject('Engineering')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677730840/TalkThru/Choose%20Subject/engineering_zl2pep.png"
                alt="Engineering"
              />
              <p className="text-center text-[20px] font-bold">Engineering</p>
            </button>
          </SwiperSlide>
          {/* 3rd slide */}
          <SwiperSlide>
            {/* Kinesiology */}
            <button
              onClick={() => setSubject('Kinesiology')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677730859/TalkThru/Choose%20Subject/kinesiology_pawrh0.png"
                alt="Kinesiology"
              />
              <p className="text-center text-[20px] font-bold">Kinesiology</p>
            </button>
          </SwiperSlide>
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
            {/* Pharmaceutical Sciences */}
            <button
              onClick={() => setSubject('Pharmaceutical Sciences')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677730877/TalkThru/Choose%20Subject/pharmaceutical_sciences_nw7o90.png"
                alt="Pharmaceutical Sciences"
              />
              <p className="text-center text-[20px] font-bold">
                Pharmaceutical Sciences
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Mechanical Engineering */}
            <button
              onClick={() => setSubject('Mechanical Engineering')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677730896/TalkThru/Choose%20Subject/mechanical_engineering_bds4jv.png"
                alt="Mechanical Engineering"
              />
              <p className="text-center text-[20px] font-bold">
                Mechanical Engineering
              </p>
            </button>
          </SwiperSlide>
          {/* 4th Slide */}
          <SwiperSlide>
            {/* Information Technology */}
            <button
              onClick={() => setSubject('Information Technology')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677730923/TalkThru/Choose%20Subject/information_technology_groo4k.png"
                alt="Information Technology"
              />
              <p className="text-center text-[20px] font-bold">
                Information Technology
              </p>
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
        {currentIndex + 4 < 16 && (
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
