import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "./ThemeContext";
import { lightTheme, darkTheme } from "./themes";

const PokemonDetails = (props) => {
  const [getDetails, setDetails] = useState({
    details: [],
  });

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}/`)
      .then((res) => setDetails({ details: res.data }));
  }, [props.match.params.id]);

  const [toggleTheme, theme, setTheme] = useContext(ThemeContext);

  const content = (
    <div style={theme === "light" ? lightTheme : darkTheme}>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${getDetails.details.id}.png`}
        alt="PokemonPic"
        style={imgStyle}
      />
      <p>Name: {getDetails.details.name}</p>
    </div>
  );

  return content;
};

const imgStyle = {
  borderRadius: "5px 5px 0 0",
  width: "300px",
  height: "300px",
};

export default PokemonDetails;
