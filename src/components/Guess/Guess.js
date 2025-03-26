import React from "react";

import { range } from "../../utils";

import { checkGuess } from "../../game-helpers";

function Guess({ guessValue, guessIndex, solution }) {
  let guess = range(5).map((item) => {
    return { letter: "", status: "" };
  });
  if (guessValue) {
    guess = checkGuess(guessValue, solution);
  }
  return (
    <p className="guess">
      {range(5).map((item, index) => {
        return (
          <span
            key={`${guessIndex}-${index}`}
            className={`cell ${guess[index].status}`}
          >
            {guessValue ? guess[index].letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
