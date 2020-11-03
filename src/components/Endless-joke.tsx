import React, { useState, useEffect } from "react";
import { getRandomJokes } from "../api";
import { includes } from "../utils/es6Methods";
import { jokeObject } from "../utils/interfaces";

const EndlessJoke = () => {
  const [showJokes, setShowJokes] = useState(false);
  const [jokes, setJokes] = useState<string[]>([]);
  const [jokeIDHistory, setJokeIDHistory] = useState<number[]>([]);

  const handleGetMultipleJokes = (
    numberOfJokesRequired: number,
    originalNumberOfJokesRequired: number,
    jokeArray: string[] = []
  ) => {
    getRandomJokes(numberOfJokesRequired)
      .then((jokeObjectArray: jokeObject[]) => {
        const uniqueIDArray: number[] = [];
        jokeObjectArray.forEach(({ id, joke }: jokeObject) => {
          if (!includes(id, jokeIDHistory)) {
            uniqueIDArray.push(id);
            jokeArray.push(joke.replace(/(&quot\;)/g, '"'));
          }
        });

        setJokeIDHistory([...jokeIDHistory, ...uniqueIDArray]);
      })
      .then(() => {
        const diff: number = originalNumberOfJokesRequired - jokeArray.length;
        if (diff > 0) {
          handleGetMultipleJokes(
            diff,
            originalNumberOfJokesRequired,
            jokeArray
          );
        } else {
          setJokes([...jokes, ...jokeArray]);
        }
      });
  };

  return (
    <div id="endlessJokeContainer" className="jokeContainer">
      <button
        className="jokeContainer__button"
        onClick={() => {
          handleGetMultipleJokes(100, 100);
          setShowJokes(true);
        }}
      >
        BEGIN
      </button>
      {!showJokes ? (
        <div></div>
      ) : (
        <div>
          {jokes.map((joke: string, index) => {
            return <div key={index}>{joke}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default EndlessJoke;
