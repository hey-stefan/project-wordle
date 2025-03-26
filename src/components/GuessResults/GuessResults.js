import React from "react";

import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessList, solution }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <Guess
            key={index}
            guessIndex={index}
            guessValue={guessList[index]}
            solution={solution}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;
