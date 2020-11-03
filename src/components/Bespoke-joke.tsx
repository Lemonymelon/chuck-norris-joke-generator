import React, { useState, useEffect } from "react";
import { getRandomJokes } from "../api";
import { includes } from "../utils/es6Methods";
import { jokeObject } from "../utils/interfaces";

const BespokeJoke = () => {
  const [currentJoke, setCurrentJoke] = useState("");
  const [jokeIDHistory, setJokeIDHistory] = useState<number[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleOnChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
  };

  const handleGetSingleBespokeJoke = () => {
    getRandomJokes(1, firstName, lastName).then(
      ([{ id, joke }]: jokeObject[]) => {
        let isNovel = false;
        while (!isNovel) {
          if (id && joke) {
            if (!includes(id, jokeIDHistory)) {
              isNovel = true;
              setJokeIDHistory([...jokeIDHistory, id]);
              setCurrentJoke(joke.replace(/(&quot\;)/g, '"'));
            }
          } else {
            break;
          }
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
      <div>{currentJoke}</div>
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
    </div>
  );
};

export default BespokeJoke;
