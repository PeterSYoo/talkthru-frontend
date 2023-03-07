import { useState } from 'react';


export interface Props {
  onSubmit: (data: ProfileUpdateData) => void;
  defaultValues: ProfileUpdateData;
}

export interface ProfileUpdateData {
  picture?: string;
  fullName?: string;
  userName?: string;
  bio?: string;
  birthday?: Date;
  occupation?: string;
  location?: string;
  timeZone?: string;
  phoneNumber?: string;
  email?: string;
}

export const AccountSettings: React.FC<Props> = ({ onSubmit, defaultValues }) => {
  const [formData, setFormData] = useState(defaultValues);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value}));
  }

  const handlePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const formData = new FormData();

      formData.append('file', file);
      formData.append('upload_preset', 'talkthru');

      const data = await fetch(

        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      ).then((res) => res.json());

      if (!data.error) {
        const imageURL = data.secure_url;
        console.log('Uploaded photo ', imageURL);
        setFormData(prevState => ({ ...prevState, picture: imageURL}));
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="grid grid-rows-[163px_98px_1fr_48px_48px]">
        {/* Row 1 */}
        <div className="flex h-full items-end gap-[96px] px-[12px]">
          {/* Your Profile Picture */}
          <div className="flex flex-col gap-[8px]">
            <span className="text-[15px] text-[#4C535F]">
              Your Profile Picture
            </span>
            <div className="h-[132px] w-[132px] p-[10px] rounded-[18px] border border-dashed border-[#4C535F] bg-[#EDF2F6] overflow-hidden">
              <div className="flex justify-center pt-[25px]">
                <img
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1677038935/TalkThru/Dashboard/add_a_photo_nahomg.png"
                  alt="add photo"
                />
              </div>
              <input type="file" name="picture" onChange={handlePictureUpload} className="w-[132px] focus:p-[10px] file:w-[132px] file:border-0 rounded-[18px] file:flex file:overflow-hidden file:rounded-none file:bg-inherit file:cursor-pointer w-[132px] cursor-pointer px-[15px] pt-[17px] text-[12px] text-[#4C535F] "/>
              {/* <span className="flex justify-center px-[15px] pt-[17px] text-center text-[12px] text-[#4C535F]"> 
                Upload your photo
              </span> */}
            </div>
          </div>
          {/* Bio */}
          <label className="flex flex-col gap-[4px]">
            <span className="text-[15px]">Bio</span>
            <div className="grid h-[120px] w-[408px] grid-cols-[1fr_24px] rounded-lg border-2 border-[#BFBFBF] p-2">
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                id=""
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
                  name="fullName"
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
                  value={formData.fullName}
                  onChange={handleInputChange}
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
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
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
                  name="birthday"
                  onChange={handleInputChange}
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
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
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
                  name="email"
                  value = {formData.email}
                  onChange={handleInputChange}
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
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
                  name="phoneNumber"
                  value = {formData.phoneNumber}
                  onChange={handleInputChange}
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
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
                  name="timeZone"
                  value = {formData.timeZone}
                  onChange={handleInputChange}
                  className="flex h-full placeholder:text-[#161039] focus:outline-none"
                  placeholder='PST'
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
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
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
          <button type="submit" className="h-full w-[148px] rounded-full bg-[#F1F192] text-[25px] font-medium text-[#0B0A1D]">
            Update
          </button>
          {/* Cancel Button */}
          <button className="h-full w-[148px] rounded-full border-2 border-[#BFBFBF] text-[25px] font-medium text-[#0B0A1D]">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
