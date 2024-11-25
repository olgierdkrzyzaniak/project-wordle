import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./../GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("playing");

  const addNewGuess = (newGuess) => {
    const nextGuesses = [
      ...guesses,
      { id: crypto.randomUUID(), letters: newGuess },
    ];
    setGuesses(nextGuesses);

    const gameOver = !checkGuess(newGuess, answer).find(
      (letter) => letter.status !== "correct"
    );

    if (gameOver) {
      setGameState("win");
      return;
    }
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) setGameState("lose");
  };

  return (
    <>
      {gameState !== "playing" && (
        <Banner moves={guesses.length} state={gameState} answer={answer} />
      )}
      <PreviousGuesses guesses={guesses} answer={answer} />
      <GuessInput
        handleNewGuess={addNewGuess}
        isGameOn={gameState === "playing"}
      />
    </>
  );
}

export default Game;
