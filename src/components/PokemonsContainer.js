import React, { useContext, useEffect } from "react";
import { lightTheme, darkTheme } from "./themes";
import { ThemeContext } from "./ThemeContext";

const PokemonsContainer = (props) => {
  const [toggleTheme, theme, setTheme] = useContext(ThemeContext);

  return (
    <div style={theme === "light" ? lightTheme : darkTheme}>
      {props.children}
    </div>
  );
};

export default PokemonsContainer;
