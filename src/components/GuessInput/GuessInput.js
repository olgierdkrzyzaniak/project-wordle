import React from "react";
import { Key } from "../Keyboard/Keyboard";

function GuessInput({ handleNewGuess, isGameOn }) {
  const [inputValue, setInputValue] = React.useState("");

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length !== 5) return;
    handleNewGuess(inputValue);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    if (event.target.value.length > 5) return;
    const nextInputValue = event.target.value.toUpperCase();
    setInputValue(nextInputValue);
  };

  const handleKeyPress = (keyChar) => {
    setInputValue(inputValue + keyChar);
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          disabled={!isGameOn}
          required
          id="guess-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          pattern="[A-Za-z]{5}"
          title="5 letter word"
        />
      </form>
      <Key value="Z" handleKeyPress={handleKeyPress} />
    </>
  );
}

export default GuessInput;
