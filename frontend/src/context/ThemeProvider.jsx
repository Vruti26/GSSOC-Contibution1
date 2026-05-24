import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = window.document.documentElement;
    const nextTheme = theme === 'dark' ? 'dark' : 'light';
    root.classList.remove('light', 'dark');
    root.classList.add(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
