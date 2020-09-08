import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      console.log("Light ---> Dark");
      setTheme("dark");
    } else {
      console.log("Dark ---> Light");
      setTheme("light");
    }
  };

  return (
    <div>
      <ThemeContext.Provider value={[toggleTheme, theme, setTheme]}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
};
