import React, { useState, useEffect } from "react";
import axios from "axios";

const Types = (props) => {
  const [getTypes, setTypes] = useState({
    types: [],
  });

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes({ types: res.data.results }));
  }, []);

  const content = getTypes.types.map((type) => (
    <p style={rowStyle}>{type.name}</p>
  ));

  return content;
};

const rowStyle = {
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

export default Types;
