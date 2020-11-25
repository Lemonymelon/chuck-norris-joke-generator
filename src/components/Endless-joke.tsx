import React, { useState } from "react";
import { getRandomJokes } from "../api";
import { includes } from "../utils/es6Methods";
import { jokeObject } from "../utils/interfaces";

const EndlessJoke = () => {
  const [showJokes, setShowJokes] = useState(false);
  const [jokes, setJokes] = useState<string[]>([]);
  const [jokeIDHistory, setJokeIDHistory] = useState<number[]>([]);

  const getMultipleJokes = (
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
          getMultipleJokes(diff, originalNumberOfJokesRequired, jokeArray);
        } else {
          setJokes([...jokes, ...jokeArray]);
        }
      });
  };

  const handleClickJoke = () => {
    getMultipleJokes(5, 5);
    if (!showJokes) {
      setShowJokes(true);
    }
  };

  const handleClickReset = () => {
    setShowJokes(false);

    setJokeIDHistory([]);
    setJokes([]);
  };

  return (
    <div id="endlessJokeContainer" className="jokeContainer">
      <button className="jokeContainer__button" onClick={handleClickJoke}>
        {showJokes ? "MORE" : "BEGIN"}
      </button>
      <button
        className={`jokeContainer__button`}
        {...(showJokes && { onClick: handleClickReset })}
        disabled={showJokes ? false : true}
      >
        RESET
      </button>
      {/* conditional reset logic - css, click functionality, cursor */}
      {!showJokes ? (
        <div className="jokeContainer__jokeText"></div>
      ) : (
        <div>
          {jokes.map((joke: string, index) => {
            return (
              <div
                className="jokeContainer__jokeText jokeContainer__siblingJoke"
                key={index}
              >
                {joke}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EndlessJoke;
