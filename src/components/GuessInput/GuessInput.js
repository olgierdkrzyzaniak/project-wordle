import React from "react";

function GuessInput({ handleNewGuess, isGameOn }) {
  const [newGuess, setNewGuess] = React.useState("");

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (newGuess.length !== 5) return;
    handleNewGuess(newGuess);
    setNewGuess("");
  };

  const handleInputChange = (event) => {
    if (event.target.value.length > 5) return;
    const nextGuess = event.target.value.toUpperCase();
    setNewGuess(nextGuess);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={!isGameOn}
        required
        id="guess-input"
        type="text"
        value={newGuess}
        onChange={handleInputChange}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
