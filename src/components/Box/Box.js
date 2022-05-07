import { React, useState } from "react";

export default function Box(props) {
  const { on, toggle } = props;
  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };

  return <div style={styles} className="box" onClick={toggle}></div>;
}
