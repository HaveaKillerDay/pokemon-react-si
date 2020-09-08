import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PokemonItem = (props) => {
  const [getOnePokemon, setOnePokemon] = useState({
    pokemonOne: [],
  });

  useEffect(() => {
    axios
      .get(props.pokemonurl)
      .then((res) => setOnePokemon({ pokemonOne: res.data }));
  }, [props.pokemonurl]);

  const name = props.name;

  const content = (
    <div className="card" style={cardStyle}>
      <Link to={`/pokemon/${getOnePokemon.pokemonOne.id}`}>
        <p>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${getOnePokemon.pokemonOne.id}.png`}
            alt="One Pokemon"
            style={imgStyle}
          />
        </p>
        <p>{name}</p> <br />
      </Link>
    </div>
  );
  return content;
};

const cardStyle = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  width: "350px",
  textAlign: "center",
  marginBottom: "10px",
  border: "1px solid black",
  borderRadius: "10px",
  marginLeft: "10px",
  marginRight: "10px",
  backgroundColor: "white",
};

const imgStyle = {
  borderRadius: "5px 5px 0 0",
  width: "300px",
  height: "300px",
};

export default PokemonItem;
