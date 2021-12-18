import { useState } from "react";

export default function useVisualMode(initialMode) {

  // useState declarations for mode and history[array of previous modes]
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  // Transition function transitions from one mode to another.
  // Replace parameter can be true which replaces a previous mode rather than 
  // just setting a new mode.
  function transition(mode, replace = false) {
    if (!replace) {
      setMode(mode);
      setHistory((prev) => [...prev, mode]);
    } else {
      setMode(mode);
      setHistory(history);
    } 
  }

  // Back function use the history array to move back to the mode used before transition.
  // Used for cancel requests to go back to the previous mode.
  function back() {
    setHistory((prev) => {
      if (prev.length > 1) {
        prev.pop(); 
        setMode(prev[prev.length - 1])
      }
      return prev
    });
  }
  return { mode, transition, back};
}