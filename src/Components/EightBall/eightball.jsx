import React, { useEffect, useRef, useState } from "react";

import { possibleAnswers } from "../Answers/answers";
import { tygerAnswers } from "../Answers/tygerAnswers";

export default function MagicEightBall({ isTygerMode }) {
  const [userInput, setInput] = useState("");
  const [randomIndex, setIndex] = useState(null);
  const [isShaking, setIsShaking] = useState(false);

  const timeoutRef = useRef(null);

  const activeAnswers = isTygerMode ? tygerAnswers : possibleAnswers;
  const answer = randomIndex !== null ? activeAnswers[randomIndex] : null;

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    setInput("");
    setIndex(null);
    setIsShaking(false);

    return () => clearTimeout(timeoutRef.current);
  }, [isTygerMode]);

  function ask() {
    if (!userInput.trim()) return;

    clearTimeout(timeoutRef.current);
    setIndex(null);
    setIsShaking(true);

    timeoutRef.current = setTimeout(() => {
      const nextIndex = Math.floor(Math.random() * activeAnswers.length);

      setIndex(nextIndex);
      setIsShaking(false);
    }, 800);
  }

  function handleChange(event) {
    setInput(event.target.value);
    setIndex(null);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      ask();
    }
  }

  function handleReset() {
    clearTimeout(timeoutRef.current);
    setInput("");
    setIndex(null);
    setIsShaking(false);
  }

  return (
    <div className={`display ${isTygerMode ? "display--tyger" : ""}`}>
      <div id="input_div">
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          id="input"
          placeholder={
            isTygerMode ? "Ask Tyger your question..." : "Ask your question..."
          }
        />
      </div>

      <div className="eight-ball-stage">
        <div className={`eight-ball ${isShaking ? "eight-ball--shaking" : ""}`}>
          <div className="eight-ball__shine" />

          <div className="eight-ball__number">
            <span>{isTygerMode ? "🐾" : "8"}</span>
          </div>
        </div>
      </div>

      {answer && <p className="answer">{answer}</p>}

      <div id="btnDiv">
        <button type="button" id="ask" onClick={ask}>
          {isTygerMode ? "Ask Tyger" : "Ask the Eight Ball"}
        </button>

        <button type="button" id="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
