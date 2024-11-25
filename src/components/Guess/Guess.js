import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ children, status }) {
  return <span className={status ? `cell ${status}` : "cell"}>{children}</span>;
}

function Guess({ value, answer }) {
  const checkedGuess = value ? checkGuess(value.letters, answer) : "";
  return (
    <p className="guess">
      {range(5).map((num) => {
        const currentLetter = checkedGuess ? checkedGuess[num] : "";
        const { status, letter } = currentLetter;

        return (
          <Cell key={num} status={status}>
            {letter}
          </Cell>
        );
      })}
    </p>
  );
}

export default Guess;
