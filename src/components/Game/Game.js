import React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guessList, setGuessList] = React.useState([]);
  console.info({ answer });
  let lastGuess = "";
  lastGuess = guessList[guessList.length - 1];
  const isWinner = lastGuess === answer;
  const isLoser = !isWinner && guessList.length === NUM_OF_GUESSES_ALLOWED;
  return (
    <>
      <GuessResults guessList={guessList} solution={answer} />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        gameOver={isLoser || isWinner}
      />
      {isWinner && (
        <HappyBanner
          guessList={guessList}
          setGuessList={setGuessList}
          setAnswer={setAnswer}
        />
      )}
      {isLoser && (
        <SadBanner
          setGuessList={setGuessList}
          answer={answer}
          setAnswer={setAnswer}
        />
      )}
    </>
  );
}

export default Game;
