import React from "react";

function ResetButton({ handleReset, children }) {
  return (
    <button className="resetButton" onClick={handleReset}>
      {children}
    </button>
  );
}

export default ResetButton;
