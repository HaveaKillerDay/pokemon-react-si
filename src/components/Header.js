import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "./ThemeContext";
import { lightHeader, darkHeader } from "./themes";

const ButtonToPages = styled.button`
  font-family: sans-serif;
  font-size: 1.2rem;
  border: 2px;
  border-color: white;
  border-radius: 10%;
  background: grey;
  color: white;
`;

const ToggleButton = styled.button`
  font-size: 1.2rem;
  border: 2px;
  border-color: white;
  border-radius: 10%;
  background: grey;
  color: white;
`;

const Header = (props) => {
  const [toggleTheme, theme, setTheme] = useContext(ThemeContext);

  return (
    <header style={theme === "light" ? lightHeader : darkHeader}>
      <h1>Pokemons | Gotta Catch them all</h1>
      <Link to="/">
        <ButtonToPages>Pokemons</ButtonToPages>
      </Link>{" "}
      |{" "}
      <Link to="/types">
        <ButtonToPages>Types</ButtonToPages>
      </Link>{" "}
      |{" "}
      <Link to="/catched">
        <ButtonToPages>Catched Pokemons</ButtonToPages>
      </Link>
      <div>
        <ToggleButton onClick={toggleTheme}>Switch Theme</ToggleButton>
      </div>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
