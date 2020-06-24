import React, { useState, useEffect } from "react";
import { getRandomJokes } from "../api";
import { includes } from "../utils/es6Methods";
import { jokeObject } from "../utils/interfaces";

const EndlessJoke = () => {
  const [showJokes, setShowJokes] = useState(false);
  const [jokes, setJokes] = useState<string[]>([]);
  const [jokeIDHistory, setJokeIDHistory] = useState<number[]>([]);

  const handleGetMultipleJokes = (
    numberOfJokes: number,
    jokeArray: string[]
  ) => {
    getRandomJokes(numberOfJokes)
      .then((jokeObjectArray: jokeObject[]) => {
        jokeObjectArray.forEach(({ id, joke }: jokeObject) => {
          if (!includes(id, jokeIDHistory)) {
            setJokeIDHistory([...jokeIDHistory, id]);
            jokeArray.push(joke);
          }
        });
      })
      .then(() => {
        const diff: number = numberOfJokes - jokeArray.length;
        if (diff) {
          getRandomJokes(diff, jokeArray);
        } else {
          setJokes([...jokes, ...jokeArray]);
        }
      });
  };

  return (
    <div>
      {!showJokes ? (
        <div>
          <button
            onClick={() => {
              handleGetMultipleJokes(5, []);
              setShowJokes(true);
            }}
          >
            BEGIN
          </button>
        </div>
      ) : (
        <div>JOKES</div>
      )}
    </div>
  );
};

export default EndlessJoke;
