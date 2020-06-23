import React from "react";
import { getRandomJokes } from "../api";

const RandomJoke = () => {
  return (
    <div>
      <button onClick={() => getRandomJokes({})}>CLICK</button>
    </div>
  );
};

export default RandomJoke;
