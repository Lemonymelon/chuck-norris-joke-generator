import React, { useState } from "react";
import { getRandomJokes } from "../api";
import { jokeObject } from "../utils/interfaces";

const BespokeJoke = () => {
  const [currentJoke, setCurrentJoke] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleOnChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
  };

  const handleGetSingleBespokeJoke = () => {
    getRandomJokes(1, firstName || "Chuck", lastName || "Norris").then(
      ([{ id, joke }]: jokeObject[]) => {
        if (id && joke) {
          setCurrentJoke(joke.replace(/(&quot\;)/g, '"'));
        }
      }
    );
  };
  return (
    <div id="bespokeJokeContainer" className="jokeContainer">
      <button
        className="jokeContainer__button"
        onClick={handleGetSingleBespokeJoke}
      >
        CLICK
      </button>
      <input
        onChange={(e) => {
          handleOnChange(e.target.value, setFirstName);
        }}
      ></input>
      <input
        onChange={(e) => {
          handleOnChange(e.target.value, setLastName);
        }}
      ></input>
      <div>{currentJoke}</div>
    </div>
  );
};

export default BespokeJoke;
