import React, { useState, useEffect } from "react";
import { getRandomJokes } from "../api";
import { includes } from "../utils/es6Methods";
import { jokeObject } from "../utils/interfaces";

const RandomJoke = () => {
  const [currentJoke, setCurrentJoke] = useState("");
  const [jokeIDHistory, setJokeIDHistory] = useState<number[]>([]);

  const handleGetSingleJoke = () => {
    getRandomJokes().then(([{ id, joke }]: jokeObject[]) => {
      let isNovel = false;

      while (!isNovel) {
        if (id && joke) {
          if (!includes(id, jokeIDHistory)) {
            isNovel = true;
            setJokeIDHistory([...jokeIDHistory, id]);
            setCurrentJoke(joke.replace(/(&quot\;)/g, '"'));
          } else {
            console.log("NOT UNIQUE");
            // double check unique mechanism works
          }
        }
      }
    });
  };

  return (
    <div id="randomJokeContainer" className="jokeContainer">

      <div className="jokeContainer__button" onClick={handleGetSingleJoke}>
        CLICK
      </div>
      <div className="jokeContainer__jokeText">{currentJoke}</div>
    </div>
  );
};

export default RandomJoke;
