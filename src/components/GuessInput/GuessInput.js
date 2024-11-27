import React from "react";
import Keyboard from "../Keyboard/Keyboard";

function GuessInput({ handleNewGuess, isGameOn, letterStatuses }) {
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
    if (!isGameOn) return;
    if (inputValue.length >= 5) return;
    setInputValue(inputValue + keyChar);
  };

  const handleDelete = () => {
    if (!isGameOn) return;
    setInputValue(inputValue.slice(0, -1));
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
      <Keyboard
        handleKeyPress={handleKeyPress}
        handleDelete={handleDelete}
        letterStatuses={letterStatuses}
      />
    </>
  );
}

export default GuessInput;
