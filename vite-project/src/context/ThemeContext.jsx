import React, { createContext, useState } from 'react';

const ThemeContext = createContext({ theme: 'dark', setTheme: () => {} });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Dark'); // Initial theme

  const toggleTheme = () => {
    setTheme(theme === 'Dark' ? 'Light' : 'Dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };