import { useEffect, useState } from "react";

export function useKeyPress(
  targetKey,
  ctrl = false,
  shift = false,
  meta = false
) {
  const [keyPressed, setKeyPressed] = useState(false);
  const [focusedElement, setFocusedElement] = useState(null);

  function downHandler({ key, ctrlKey, shiftKey, metaKey, target }) {
    if (
      key === targetKey &&
      ctrlKey === ctrl &&
      shiftKey === shift &&
      metaKey === meta
    ) {
      setKeyPressed(true);
      setFocusedElement(target);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
      setFocusedElement(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey || e.shiftKey || e.metaKey) {
        e.preventDefault();
      }
      downHandler(e);
    });
    window.addEventListener("keyup", (e) => {
      upHandler(e);
    });
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return { keyPressed, focusedElement };
}
