import React from "react";
import RestartButton from "../RestartButton";

function HappyBanner({ guessList, setGuessList, setAnswer }) {
  const guessListLength = guessList.length;
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessListLength} guess{guessListLength > 1 && "es"}
        </strong>
        .
      </p>
      <RestartButton setGuessList={setGuessList} setAnswer={setAnswer} />
    </div>
  );
}

export default HappyBanner;
