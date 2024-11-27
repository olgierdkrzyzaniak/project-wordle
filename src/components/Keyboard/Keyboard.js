import React from "react";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { checkGuess } from "../../game-helpers";

//correct, incorrect, misplaced

export function Key({ value, handleKeyPress, keyStatus = "incorrect" }) {
  return (
    <button
      className={`key ${keyStatus}`}
      onClick={() => handleKeyPress(value)}
    >
      {value}
    </button>
  );
}

export function DeleteKey({ handleDelete }) {
  return (
    <button className="key" onClick={handleDelete}>
      <CaretLeftIcon />
    </button>
  );
}

function Keyboard({ handleKeyPress, handleDelete, letterStatuses }) {
  const keys = [
    { char: "Q" },
    { char: "W" },
    { char: "E" },
    { char: "R" },
    { char: "T" },
    { char: "Y" },
    { char: "U" },
    { char: "I" },
    { char: "O" },
    { char: "P" },
    { char: "A" },
    { char: "S" },
    { char: "D" },
    { char: "F" },
    { char: "G" },
    { char: "H" },
    { char: "J" },
    { char: "K" },
    { char: "L" },
    { char: "Z" },
    { char: "X" },
    { char: "C" },
    { char: "V" },
    { char: "B" },
    { char: "N" },
    { char: "M" },
  ];

  return (
    <div className="keyboard">
      <div className="row">
        {keys.slice(0, 10).map((key) => (
          <Key
            value={key.char}
            key={key.char}
            handleKeyPress={handleKeyPress}
            keyStatus={letterStatuses[key.char]}
          />
        ))}
      </div>
      <div className="row">
        {keys.slice(10, 19).map((key) => (
          <Key
            value={key.char}
            key={key.char}
            handleKeyPress={handleKeyPress}
            keyStatus={letterStatuses[key.char]}
          />
        ))}
      </div>
      <div className="row">
        {keys.slice(19).map((key) => (
          <Key
            value={key.char}
            key={key.char}
            handleKeyPress={handleKeyPress}
            keyStatus={letterStatuses[key.char]}
          />
        ))}
        <DeleteKey handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default Keyboard;
