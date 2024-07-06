import React, { createContext, useState } from 'react';

const ProfileContext = createContext({ profileImageUrl: '', setProfileImageUrl: () => {}});

 const ProfileProvider = ({ children }) => {
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  const updateProfileImageUrl = (newImageUrl) => {
    setProfileImageUrl(newImageUrl);
  };

  return (
    <ProfileContext.Provider value={{ profileImageUrl, updateProfileImageUrl }}>
      {children}
    </ProfileContext.Provider>
  );
};

export{ ProfileContext, ProfileProvider };
