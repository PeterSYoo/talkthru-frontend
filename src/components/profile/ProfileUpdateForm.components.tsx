import React, { useState } from 'react';

export interface Props {
  onSubmit: (data: ProfileUpdateData) => void;
  defaultValues: ProfileUpdateData;
}

export interface ProfileUpdateData {
  picture?: string;
  userName?: string;
  bio?: string;
  occupation?: string;
  location?: string;
}

export const ProfileUpdateForm: React.FC<Props> = ({ onSubmit, defaultValues}) => {
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
        <form onSubmit={handleSubmit}>
        <label>
          Profile Picture:
          <input type="file" name="picture" onChange={handlePictureUpload} />
        </label>
        <label>
          Username:
          <input type="text" name="userName" value={formData.userName} onChange={handleInputChange} />
        </label>
        <label>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleInputChange} />
        </label>
        <label>
          Occupation:
          <input type="text" name="occupation" value={formData.occupation} onChange={handleInputChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    )
}
