import React, { createContext, useContext, useEffect, useState } from 'react';

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps>({
  darkMode: localStorage.getItem('darkMode') === 'true',
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true',
  );

  useEffect(() => {
    document.body.classList.remove(darkMode ? 'light' : 'dark');
    document.body.classList.add(darkMode ? 'dark' : 'light');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      document.body.classList.remove(prevMode ? 'dark' : 'light');
      document.body.classList.add(newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = (): DarkModeContextProps => {
  return useContext(DarkModeContext);
};
