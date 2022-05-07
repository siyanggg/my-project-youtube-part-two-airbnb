import { React, useState, useEffect } from "react";
import BoxData from "../../../data/boxData/BoxData";

export default function BoxComponent(props) {
  const { on, key, toggle } = props;

  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };

  return <div style={styles} className="box" onClick={toggle}></div>;
}
