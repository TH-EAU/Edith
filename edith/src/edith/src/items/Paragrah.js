import React, { useEffect } from "react";
import styles from "../edith.module.css";
import { useKeyPress } from "../resources";

export default function Paragraph({ id, children }) {
  const handleNewLine = useKeyPress("Enter");
  const handleNewModule = useKeyPress("Enter", false, true);

  useEffect(() => {
    // console.log(handleNewLine);
    if (
      handleNewLine.focusedElement &&
      handleNewLine.focusedElement.dataset.id === id &&
      handleNewLine.keyPressed === true
    ) {
      console.log(`new line for ${id} paragraph`);
    }
  }, [handleNewLine]);

  return (
    <p
      className={styles.paragraphModule}
      contentEditable
      suppressContentEditableWarning
      data-id={id}
    >
      {children}
    </p>
  );
}
