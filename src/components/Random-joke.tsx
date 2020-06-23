import React, { useState, useEffect } from "react";
import { getRandomJokes } from "../api";

const RandomJoke = () => {
  const [currentJoke, setCurrentJoke] = useState("");
  const [jokeIDHistory, setJokeIDHistory] = useState<number[]>([]);

  interface jokeObject {
    id: number;
    joke: string;
    categories: [];
  }
  const handleGetSingleJoke = () => {
    getRandomJokes().then(([{ id, joke }]: jokeObject[]) => {
      if (id && joke) {
        setJokeIDHistory([...jokeIDHistory, id]);
        setCurrentJoke(joke);
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
