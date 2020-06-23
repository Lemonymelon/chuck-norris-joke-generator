import React, { useState, useEffect } from "react";
import { getRandomJokes } from "../api";
import { includes } from "../utils/es6Methods";

const RandomJoke = () => {
  const [currentJoke, setCurrentJoke] = useState("");
  const [jokeIDHistory, setJokeIDHistory] = useState<number[]>([]);
  console.log(jokeIDHistory);

  interface jokeObject {
    id: number;
    joke: string;
    categories: [];
  }
  const handleGetSingleJoke = () => {
    getRandomJokes().then(([{ id, joke }]: jokeObject[]) => {
      let isNovel = false;
      while (!isNovel) {
        if (id && joke) {
          if (!includes(id, jokeIDHistory)) {
            isNovel = true;
            setJokeIDHistory([...jokeIDHistory, id]);
            setCurrentJoke(joke);
          }
        }
      }
    });
  };
  return (
    <div>
      <div>{currentJoke}</div>
      <button onClick={handleGetSingleJoke}>CLICK</button>
    </div>
  );
};

export default RandomJoke;
