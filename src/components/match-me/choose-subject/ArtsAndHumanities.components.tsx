import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ArtsAndHumanities = ({
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

  const bulletPoints = Array(Math.ceil(20 / 4))
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
          <SwiperSlide>
            {/* Performing Arts */}
            <button
              onClick={() => setSubject('Performing Arts')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677724861/TalkThru/Choose%20Subject/performing_arts_b8mvgt.png"
                alt="Performing Arts"
              />
              <p className="text-center text-[20px] font-bold">
                Performing Arts
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Music */}
            <button
              onClick={() => setSubject('Music')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677724891/TalkThru/Choose%20Subject/music_dmfquk.png"
                alt="Music"
              />
              <p className="text-center text-[20px] font-bold">Music</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Sociology */}
            <button
              onClick={() => setSubject('Sociology')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677724943/TalkThru/Choose%20Subject/sociology_srdlb9.png"
                alt="Sociology"
              />
              <p className="text-center text-[20px] font-bold">Sociology</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* History */}
            <button
              onClick={() => setSubject('History')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677724985/TalkThru/Choose%20Subject/history_ft0nat.png"
                alt="History"
              />
              <p className="text-center text-[20px] font-bold">History</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Social Work */}
            <button
              onClick={() => setSubject('Social Work')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677725053/TalkThru/Choose%20Subject/social_work_w5thga.png"
                alt="Social Work"
              />
              <p className="text-center text-[20px] font-bold">Social Work</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Journalism */}
            <button
              onClick={() => setSubject('Journalism')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677725086/TalkThru/Choose%20Subject/journalism_jckxjk.png"
                alt="Journalism"
              />
              <p className="text-center text-[20px] font-bold">Journalism</p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Graphic Design */}
            <button
              onClick={() => setSubject('Graphic Design')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677725120/TalkThru/Choose%20Subject/graphic_design_avznay.png"
                alt="Graphic Design"
              />
              <p className="text-center text-[20px] font-bold">
                Graphic Design
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Cullinary Arts */}
            <button
              onClick={() => setSubject('Cullinary Arts')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677725157/TalkThru/Choose%20Subject/cullinary_arts_z6t1wp.png"
                alt="Cullinary Arts"
              />
              <p className="text-center text-[20px] font-bold">
                Cullinary Arts
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Cosmetics */}
            <button
              onClick={() => setSubject('Cosmetics')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677725222/TalkThru/Choose%20Subject/cosmetics_sullo1.png"
                alt="Cosmetics"
              />
              <p className="text-center text-[20px] font-bold">Cosmetics</p>
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
            {/* Criminal Justice */}
            <button
              onClick={() => setSubject('Criminal Justice')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677725276/TalkThru/Choose%20Subject/criminal_justice_ki8y23.png"
                alt="Criminal Justice"
              />
              <p className="text-center text-[20px] font-bold">
                Criminal Justice
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            {/* Legal Studies */}
            <button
              onClick={() => setSubject('Legal Studies')}
              className="flex h-[216px] w-[216px] flex-col items-center justify-center gap-[8px] rounded-[11px] border-2 border-[#BFBFBF] p-5 shadow-[0_5px_3px_0px] shadow-[#BFBFBF]"
            >
              <img
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677725314/TalkThru/Choose%20Subject/legal_studies_gx855e.png"
                alt="Legal Studies"
              />
              <p className="text-center text-[20px] font-bold">Legal Studies</p>
            </button>
          </SwiperSlide>
        </Swiper>
        {currentIndex + 4 < 20 && (
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
