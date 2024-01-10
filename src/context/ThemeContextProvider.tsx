import React, { createContext, useContext, useEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

const ThemeContext = createContext({
  theme: 'light',
  onChangeTheme: () => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(
    isBrowser && localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
  );

  useEffect(() => {
    const isLight = theme === 'light';

    document.body.classList.remove(isLight ? 'dark' : 'light');
    document.body.classList.add(isLight ? 'light' : 'dark');
    isBrowser && localStorage.setItem('theme', theme);
  }, [theme]);

  const onChangeTheme = () => {
    setTheme(prevMode => {
      const isLight = prevMode === 'light';
      const newMode = isLight ? 'dark' : 'light';

      isBrowser && localStorage.setItem('theme', newMode);
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
