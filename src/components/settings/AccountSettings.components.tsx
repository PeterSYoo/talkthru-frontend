export const AccountSettings = () => {

  return (
    <>
      <div className="grid grid-rows-[163px_98px_1fr_48px_48px]">
        {/* Row 1 */}
        <div className="flex h-full items-end gap-[96px] px-[12px]">
          {/* Your Profile Picture */}
          <div className="flex flex-col gap-[8px]">
            <span className="text-[15px] text-[#4C535F]">
              Your Profile Picture
            </span>
            <button className="h-[132px] w-[132px] rounded-[18px] border border-dashed border-[#4C535F] bg-[#EDF2F6]">
              <div className="flex justify-center pt-[25px]">
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677038935/TalkThru/Dashboard/add_a_photo_nahomg.png"
                  alt="add photo"
                />
              </div>
              <span className="flex justify-center px-[15px] pt-[17px] text-center text-[12px] text-[#4C535F]">
                Upload your photo
              </span>
            </button>
          </div>
          {/* Bio */}
          <label className="flex flex-col gap-[4px]">
            <span className="text-[15px]">Bio</span>
            <div className="grid h-[120px] w-[408px] grid-cols-[1fr_24px] rounded-lg border-2 border-[#BFBFBF] p-2">
              <textarea
                name=""
                id=""
                placeholder="Toshi Adams..."
                className="h-full w-full resize-none placeholder:text-[15px] placeholder:text-[#161039] focus:outline-none"
              />
              <div>
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677049629/TalkThru/Settings/mode_edit_wyjx4d.png"
                  alt="edit"
                />
              </div>
            </div>
          </label>
        </div>
        {/* Row 2 */}
        <div className="flex h-full items-center justify-center">
          <div className="flex w-full border-b-2 border-[#E0E4EC]"></div>
        </div>
        {/* Row 3 */}
        <div className="grid h-full grid-cols-[1fr_120px_1fr]">
          {/* Column 1 */}
          <div className="flex w-full flex-col gap-[20px]">
            {/* Full Name */}
            <label className="flex w-full flex-col">
              <span className="text-[15px]">Full name</span>
              <div className="grid h-[48px] grid-cols-[1fr_24px] items-center rounded-lg border-2 border-[#BFBFBF] px-[10px]">
                <input
                  type="text"
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
                  placeholder="Toshi Adams"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677049629/TalkThru/Settings/mode_edit_wyjx4d.png"
                    alt="edit"
                  />
                </div>
              </div>
            </label>
            {/* Username */}
            <label className="flex w-full flex-col">
              <span className="text-[15px]">Username</span>
              <div className="grid h-[48px] grid-cols-[1fr_24px] items-center rounded-lg border-2 border-[#BFBFBF] px-[10px]">
                <input
                  type="text"
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
                  placeholder="Toshi01"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677049629/TalkThru/Settings/mode_edit_wyjx4d.png"
                    alt="edit"
                  />
                </div>
              </div>
            </label>
            {/* Birthday */}
            <label className="flex w-full flex-col">
              <span className="text-[15px]">Birthday</span>
              <div className="h-[48px] items-center rounded-lg border-2 border-[#BFBFBF] px-[10px]">
                <input
                  type="date"
                  className="flex h-full w-full placeholder:text-[#161039] focus:outline-none"
                />
                <div></div>
              </div>
            </label>
            {/* Occupation */}
            <label className="flex w-full flex-col">
              <span className="text-[15px]">Occupation</span>
              <div className="grid h-[48px] grid-cols-[1fr_24px] items-center rounded-lg border-2 border-[#BFBFBF] px-[10px]">
                <input
                  type="text"
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
                  placeholder="Economic student"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677049629/TalkThru/Settings/mode_edit_wyjx4d.png"
                    alt="edit"
                  />
                </div>
              </div>
            </label>
          </div>
          {/* Blank Column 2 */}
          <div></div>
          {/* Column 3 */}
          <div className="flex w-full flex-col gap-[20px]">
            {/* Email */}
            <label className="flex w-full flex-col">
              <span className="text-[15px]">Email</span>
              <div className="grid h-[48px] grid-cols-[1fr_24px] items-center rounded-lg border-2 border-[#BFBFBF] px-[10px]">
                <input
                  type="email"
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
                  placeholder="ToshiA01@gmail.com"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677049629/TalkThru/Settings/mode_edit_wyjx4d.png"
                    alt="edit"
                  />
                </div>
              </div>
            </label>
            {/* Phone number */}
            <label className="flex w-full flex-col">
              <span className="text-[15px]">Phone number</span>
              <div className="grid h-[48px] grid-cols-[1fr_24px] items-center rounded-lg border-2 border-[#BFBFBF] px-[10px]">
                <input
                  type="text"
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
                  placeholder="+1 9876543210"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677049629/TalkThru/Settings/mode_edit_wyjx4d.png"
                    alt="edit"
                  />
                </div>
              </div>
            </label>
            {/* Timezone */}
            <label className="flex w-full flex-col">
              <span className="text-[15px]">Timezone</span>
              <div className="grid h-[48px] grid-cols-[1fr_24px] items-center rounded-lg border-2 border-[#BFBFBF] px-[10px]">
                <input
                  type="text"
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
                  placeholder="PST"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677049629/TalkThru/Settings/mode_edit_wyjx4d.png"
                    alt="edit"
                  />
                </div>
              </div>
            </label>
            {/* Location */}
            <label className="flex w-full flex-col">
              <span className="text-[15px]">Location</span>
              <div className="grid h-[48px] grid-cols-[1fr_24px] items-center rounded-lg border-2 border-[#BFBFBF] px-[10px]">
                <input
                  type="text"
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
                  placeholder="Wisconsin"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677049629/TalkThru/Settings/mode_edit_wyjx4d.png"
                    alt="edit"
                  />
                </div>
              </div>
            </label>
          </div>
        </div>
        {/* Blank Row 4 */}
        <div></div>
        {/* Row 5 */}
        <div className="flex h-full items-center gap-[24px]">
          {/* Update Button */}
          <button className="h-full w-[148px] rounded-full bg-[#F1F192] text-[25px] font-medium text-[#0B0A1D]">
            Update
          </button>
          {/* Cancel Button */}
          <button className="h-full w-[148px] rounded-full border-2 border-[#BFBFBF] text-[25px] font-medium text-[#0B0A1D]">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
