import React, { useEffect, useState } from "react";
import "../styles/App.css";

// const cStyle = {
//   textAlign: "center",
// };

const App = () => {
  const [renderChoice, setRenderChoice] = useState(false);
  const [position, setPosition] = useState(5);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const playgroundWidth = document.querySelector(".playground").offsetWidth;
      const ballWidth = 50;
      const maxPosition = playgroundWidth - ballWidth;
      if (e.key === "ArrowRight" || e.keyCode === 39) {
        setPosition((prev) => {
          return Math.min(prev + 5, maxPosition);
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const buttonClickHandler = () => setRenderChoice(true);
  return (
    <div className="playground">
      {renderChoice ? (
        <div
          className="ball"
          style={{ transform: `translateX(${position}px)` }}
        ></div>
      ) : (
        <button onClick={buttonClickHandler} className="start">
          start
        </button>
      )}
    </div>
  );
};

export default App;
