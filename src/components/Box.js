import { React, useState } from "react";

export default function Box(props) {
  console.log(props.id);
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  //   function toggle() {
  //     setOn((prevOn) => !prevOn);
  //   }

  //   return <div style={styles} className="box" onClick={toggle}></div>;
  return (
    <div
      style={styles}
      className="box"
      onClick={() => props.toggle(props.id)}
    ></div>
  );
}
