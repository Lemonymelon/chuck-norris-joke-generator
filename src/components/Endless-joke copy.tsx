import React, { useState, useEffect } from "react";
import { getRandomJokes } from "../api";
import { includes } from "../utils/es6Methods";
import { jokeObject } from "../utils/interfaces";

const EndlessJoke = () => {
  const [showJokes, setShowJokes] = useState(false);
  const [jokes, setJokes] = useState<string[]>([]);
  const [jokeIDHistory, setJokeIDHistory] = useState<number[]>([]);

  console.log("JIDH", jokeIDHistory.length);

  const handleGetMultipleJokes = (
    // runningIDHistory
    numberOfJokes: number,
    jokeArray: string[] = []
  ) => {
    console.log("---HANDLE---");
    // console.log(jokeArray);

    getRandomJokes(numberOfJokes)
      .then((jokeObjectArray: jokeObject[]) => {
        const uniqueIDArray: number[] = [];
        jokeObjectArray.forEach(({ id, joke }: jokeObject) => {
          // console.log(id);
          if (!includes(id, jokeIDHistory)) {
            uniqueIDArray.push(id);
            jokeArray.push(joke);
          }
        });
        console.log("GRJJIDH", jokeIDHistory.length);

        setJokeIDHistory([...jokeIDHistory, ...uniqueIDArray]);
      })
      .then(() => {
        const diff: number = numberOfJokes - jokeArray.length;
        if (diff > 0) {
          // console.log("!!!");
          // console.log("NOJ: ", numberOfJokes);
          // console.log("JAL: ", jokeArray.length);

          // console.log("DIFF: ", diff);

          // jokeIDHistory must be passed in addition to state ID history

          handleGetMultipleJokes(diff, jokeArray);
        } else {
          // setJokes will always ONLY fire here
          console.log("NOT");
          setJokes([...jokes, ...jokeArray]);
        }
      });
  };

  return (
    <div id="endlessJokeContainer" className="jokeContainer">
      {!showJokes ? (
        <div>
          <button
            onClick={() => {
              console.log("-----CLICK-----");
              handleGetMultipleJokes(100);
              // setShowJokes(true);
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
