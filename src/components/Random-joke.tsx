import React, { useState } from "react";
import { getRandomJokes } from "../api";
import { jokeObject } from "../utils/interfaces";

const RandomJoke = () => {
  const [currentJoke, setCurrentJoke] = useState("");

  const handleGetSingleJoke = () => {
    getRandomJokes().then(([{ id, joke }]: jokeObject[]) => {
      if (id && joke) {
        setCurrentJoke(joke.replace(/(&quot\;)/g, '"'));
      }
    });
  };

  return (
    <div id="randomJokeContainer" className="jokeContainer">
      <button className="jokeContainer__button" onClick={handleGetSingleJoke}>
        CLICK
      </button>
      <div className="jokeContainer__jokeText">{currentJoke}</div>
    </div>
  );
};

export default RandomJoke;
