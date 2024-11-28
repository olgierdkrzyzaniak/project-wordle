import React from "react";
import ResetButton from "../ResetButton/ResetButton";

function Banner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export function WonBanner({ moves, handleReset }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{moves > 1 ? `${moves} guesses` : "1 guess"}</strong>.
      </p>
      <ResetButton handleReset={handleReset}>Want to play again?</ResetButton>
    </Banner>
  );
}

export function LostBanner({ answer, handleReset }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <ResetButton handleReset={handleReset}>Want to try again?</ResetButton>
    </Banner>
  );
}

export default Banner;
