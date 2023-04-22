import { useState, useEffect } from 'react';

export const useDarkMode = (): any => {
  const [theme, setTheme] = useState('dark');

  const setMode = (mode: any) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const toggleTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('dark');
  }, []);

  return [theme, toggleTheme];
};
