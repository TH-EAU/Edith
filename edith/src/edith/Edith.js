import React, { useState } from "react";
import styles from "./src/edith.module.css";
import Layout from "./src/Layout";
import { os } from "./src/constants";
import { useKeyPress } from "./src/resources";

export default function Edith({ inData }) {
  const [layout, setLayout] = useState([]);

  const updateLayout = (exlayout) => {
    setLayout(exlayout);
  };

  const addLayoutItem = () => {
    setLayout([
      ...layout,
      {
        x: 1,
        y: 0,
        w: 3,
        h: 7,
        minW: 2,
        maxW: 4,
        text: "une miiine",
        module: 1,
      },
    ]);
  };

  const happyPress = useKeyPress("h");

  const handleSave = useKeyPress(
    "s",
    os !== "mac" ? true : false,
    false,
    os === "mac" ? true : false
  );

  // console.log(handleSave);
  handleSave.keyPressed == true && console.log("Saved!");

  return (
    <div className={styles.editor}>
      <Layout data={layout} onChange={updateLayout}></Layout>
      <button onClick={addLayoutItem}>+</button>
      {happyPress.keyPressed && "😊"}
    </div>
  );
}
