import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
function RestartButton({ setGuessList, setAnswer }) {
  return (
    <button
      onClick={() => {
        setGuessList([]);
        setAnswer(sample(WORDS));
      }}
    >
      Restart
    </button>
  );
}

export default RestartButton;
