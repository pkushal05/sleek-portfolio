import {useState, useEffect } from "react";
import { ThemeContext, type Theme } from "../../context/ThemeContext";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme;
    if (saved) {
      return saved;
    }
    // Optional: Check system preference
    // return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return "light";
  });

  useEffect(() => {
    // Only update the DOM class, don't call setTheme
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]); // Run whenever theme changes

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
