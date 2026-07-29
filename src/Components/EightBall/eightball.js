import React, { useState } from "react";
import { possibleAnswers } from "../Answers/answers";

export default function MagicEightBall(props) {
  const [userInput, setInput] = useState("");
  const [randomIndex, setIndex] = useState(null);
  const [isShaking, setIsShaking] = useState(false);

  function ask() {
    if (!userInput.trim()) return;

    setIsShaking(true);

    setTimeout(() => {
      setIndex(Math.floor(Math.random() * possibleAnswers.length));
      setIsShaking(false);
    }, 800);
  }

  function handleChange(e) {
    setInput(e.target.value);
    setIndex(null);
  }

  function handleReset() {
    setInput("");
    setIndex(null);
  }
  const answer = possibleAnswers[randomIndex];

  return (
    <div className="display">
      <div id="input_div">
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          id="input"
          placeholder="Ask your quesion..."
        />
      </div>

      <div className="eight-ball-stage">
        <div className={`eight-ball ${isShaking ? "eight-ball--shaking" : ""}`}>
          <div className="eight-ball__shine"></div>

          <div className="eight-ball__number">
            <span>8</span>
          </div>
        </div>
      </div>

      {answer && (
        <>
          <p className="answer">{answer}</p>
        </>
      )}
      <div id="btnDiv">
        <button type="button" id="ask" onClick={ask}>
          Ask the Eight Ball
        </button>

        <button type="button" id="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
