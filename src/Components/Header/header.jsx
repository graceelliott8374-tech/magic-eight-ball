import React from "react";

export default function Header({ isTygerMode }) {
  return (
    <header className={isTygerMode ? "header header--tyger" : "header"}>
      <h1 className="glow">
        {isTygerMode ? "Ask Tyger—If You Dare" : "Ask the Magic Eight Ball!"}
      </h1>

      <p className="header__subtitle">
        {isTygerMode
          ? "Questions are free. Judgment is guaranteed."
          : "Ask a question and discover what fate has to say."}
      </p>
    </header>
  );
}
