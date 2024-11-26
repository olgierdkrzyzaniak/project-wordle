import React from "react";

const Keys = [];

//correct, incorrect, misplaced

export function Key({ value, handleKeyPress }) {
  return (
    <button className="key missplaced" onClick={() => handleKeyPress(value)}>
      {value}
    </button>
  );
}

function Keyboard() {
  return <div></div>;
}

export default Keyboard;
