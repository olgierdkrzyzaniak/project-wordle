import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./../GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import { WonBanner, LostBanner } from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { getCharStatuses } from "../../game-helpers";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// // To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setNewAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");
  console.info({ answer });

  const letterStatuses = getCharStatuses(guesses, answer);

  const restartGame = () => {
    setNewAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus("playing");
  };

  const addNewGuess = (newGuess) => {
    const nextGuesses = [
      ...guesses,
      { id: crypto.randomUUID(), letters: newGuess },
    ];
    setGuesses(nextGuesses);

    if (newGuess.toUpperCase() === answer) {
      setGameStatus("win");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  };

  return (
    <>
      <PreviousGuesses guesses={guesses} answer={answer} />
      <GuessInput
        handleNewGuess={addNewGuess}
        isGameOn={gameStatus === "playing"}
        letterStatuses={letterStatuses}
      />
      {gameStatus === "win" && (
        <WonBanner moves={guesses.length} handleReset={restartGame} />
      )}
      {gameStatus === "lose" && (
        <LostBanner answer={answer} handleReset={restartGame} />
      )}
    </>
  );
}

export default Game;
