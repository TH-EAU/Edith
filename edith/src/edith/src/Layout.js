import React, { useMemo } from "react";
import ReactGridLayout from "react-grid-layout";
import Paragraph from "./items/Paragrah";

import styles from "./edith.module.css";

export default function Layout({ data, onChange }) {
  const children = useMemo(() => {
    return data.map((val, idx) => {
      console.log(val.text);
      return (
        <div key={`edith-${idx}`} data-grid={val}>
          <Paragraph id={`edith-${idx}`}>{val.text}</Paragraph>
        </div>
      );
    });
  }, [data]);

  return (
    <ReactGridLayout
      cols={1}
      width={1200}
      onLayoutChange={onChange}
      compactType="vertical"
      rowHeight={30}
    >
      {children}
    </ReactGridLayout>
  );
}
