import { useState } from "react";

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  function transition(mode, replace = false) {
    if (!replace) {
      setMode(mode);
      setHistory((prev) => [...prev, mode]);
    } else {
      setMode(mode);
      setHistory(history);
    } 
  }

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