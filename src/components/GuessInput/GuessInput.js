import React from "react";

function GuessInput({ guessList, setGuessList, gameOver }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setGuessList([...guessList, guess]);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        pattern=".{5,5}"
        disabled={gameOver}
      />
    </form>
  );
}

export default GuessInput;
