import React from "react";

function Banner({ moves, state, answer }) {
  const happyBanner = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{moves} guesses</strong>.
      </p>
    </div>
  );
  const sadBanner = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  const endBanner = state === "win" ? happyBanner : sadBanner;
  return endBanner;
}

export default Banner;
