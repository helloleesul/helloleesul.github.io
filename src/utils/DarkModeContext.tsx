import React, { createContext, useContext, useEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps>({
  darkMode: isBrowser && localStorage.getItem('darkMode') === 'true',
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(
    isBrowser && localStorage.getItem('darkMode') === 'true',
  );

  useEffect(() => {
    if (isBrowser) {
      document.body.classList.remove(darkMode ? 'light' : 'dark');
      document.body.classList.add(darkMode ? 'dark' : 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      if (isBrowser) {
        localStorage.setItem('darkMode', newMode.toString());
      }
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
