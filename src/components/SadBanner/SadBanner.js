import React from "react";
import RestartButton from "../RestartButton";

function SadBanner({ setGuessList, answer, setAnswer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <RestartButton setGuessList={setGuessList} setAnswer={setAnswer} />
    </div>
  );
}

export default SadBanner;
