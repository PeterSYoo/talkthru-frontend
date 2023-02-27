import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface Props {
  onSubmit: (data: ProfileUpdateData) => void;
  defaultValues: ProfileUpdateData;
}

interface ProfileUpdateData {
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
          Profile Picture URL:
          <input type="text" name="picture" value={formData.picture} onChange={handleInputChange} />
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
