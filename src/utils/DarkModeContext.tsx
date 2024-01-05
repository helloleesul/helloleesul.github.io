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
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
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
