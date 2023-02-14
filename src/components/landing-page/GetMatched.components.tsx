export const GetMatched = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex items-center gap-[48px]">
          {/* Info Text */}
          <div className="flex flex-col max-w-[658px] gap-[54px]">
            {/* Heading */}
            <h1 className="text-[60px] leading-[90px] font-bold">
              Get matched
            </h1>
            {/* Paragraph */}
            <p className="text-[22px] leading-[33px] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue
              tellus, euismod vitae velit at, convallis sollicitudin nibh.
              Suspendisse eget rhoncus mauris. Quisque eu est eu lorem ultricies
              porttitor eu at sapien. Phasellus sapien sem, venenatis sit amet
              pretium in, blandit sed ligula. Aenean in est felis. Ut placerat
              risus lacinia nulla suscipit laoreet. Maecenas nec ullamcorper
              leo.
            </p>
          </div>
          {/* Image */}
          <div>
            <img
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676329594/TalkThru/Landing%20Page/get_matched_opdfil.png"
              alt="get-matched"
            />
          </div>
        </div>
      </div>
    </>
  );
};
