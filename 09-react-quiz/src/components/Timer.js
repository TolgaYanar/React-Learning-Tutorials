import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  useEffect(
    function () {
      const interval = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return function () {
        clearInterval(interval);
      };
    },
    [dispatch]
  );

  return <div className="timer">{formatTime(secondsRemaining)}</div>;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export default Timer;
