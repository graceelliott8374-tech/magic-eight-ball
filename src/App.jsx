import React, { useState } from "react";

import Header from "./Components/Header/header";
import MagicEightBall from "./Components/EightBall/eightball";
import tygerImage from "./assets/images/tyger-transparent.png";

import "./App.css";

function App() {
  const [isTygerMode, setIsTygerMode] = useState(false);

  const toggleMode = () => {
    setIsTygerMode((currentMode) => !currentMode);
  };

  return (
    <div className={`App ${isTygerMode ? "tyger-mode" : "classic-mode"}`}>
      <Header isTygerMode={isTygerMode} />

      <div className="mode-selector">
        <span>Classic 8 Ball</span>

        <button
          type="button"
          className="mode-toggle"
          role="switch"
          aria-checked={isTygerMode}
          aria-label="Switch between Classic 8 Ball and Ask Tyger"
          onClick={toggleMode}
        >
          <span className="mode-toggle__slider" />
        </button>

        <span>Ask Tyger</span>
      </div>

      {isTygerMode && (
        <img
          className="tyger-portrait"
          src={tygerImage}
          alt="Tyger looking prepared to judge your question"
        />
      )}

      <MagicEightBall isTygerMode={isTygerMode} />
    </div>
  );
}

export default App;
