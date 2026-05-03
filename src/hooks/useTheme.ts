import { AvailableThemes, type Theme } from '@/typings';
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(AvailableThemes.LIGHT);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === AvailableThemes.LIGHT ? AvailableThemes.DARK : AvailableThemes.LIGHT));

  return { theme, toggleTheme, isDark: theme === AvailableThemes.DARK };
};
