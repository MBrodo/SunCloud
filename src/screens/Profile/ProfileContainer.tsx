import React, { useEffect, useState } from 'react';
import { ProfileView } from './ProfileView';
import { useDarkMode } from 'react-native-dynamic';

const ProfileContainer = () => {
  const [currentTheme, setCurrentTheme] = useState('');
  const isDarkMode = useDarkMode();
  useEffect(() => {
    isDarkMode ? setCurrentTheme('Dark') : setCurrentTheme('Light');
  }, [isDarkMode]);

  return <ProfileView currentTheme={currentTheme} />;
};

export default ProfileContainer;
