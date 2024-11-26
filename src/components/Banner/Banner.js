import React from "react";

function Banner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export function WonBanner({ moves }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{moves > 1 ? `${moves} guesses` : "1 guess"}</strong>.
      </p>
    </Banner>
  );
}

export function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default Banner;
