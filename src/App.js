import React from "react";
import "./App.css";
import Pokemons from "./components/Pokemons";
import Header from "./components/Header";
import Types from "./components/pages/Types";
import PokemonDetails from "./components/PokemonDetails";
import { ThemeContextProvider } from "./components/ThemeContext";
import PokemonsContainer from "./components/PokemonsContainer";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = (props) => {
  const [getPokemons, setPokemons] = useState({
    pokemons: [],
  });

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon", { crossdomain: true })
      .then((res) => setPokemons({ pokemons: res.data.results }));
  }, []);

  let content = (
    <Router>
      <ThemeContextProvider>
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <PokemonsContainer>
                <Pokemons pokemons={getPokemons.pokemons} />
              </PokemonsContainer>
            )}
          />
          <div style={containerStyle}>
            <Route path="/types" component={Types}></Route>
          </div>
          <Route path="/pokemon/:id" component={PokemonDetails}></Route>
        </div>
      </ThemeContextProvider>
    </Router>
  );

  return content;
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  backgroundColor: "#333",
};

const lightContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  backgroundColor: "white",
  color: "black",
};

export default App;
