import { React, useState } from "react";

export default function Box(props) {
  const [On, setOn] = useState(props.on);
  console.log(props.on);
  const styles = {
    backgroundColor: On ? "#222222" : "transparent",
  };

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return <div style={styles} className="box" onClick={toggle}></div>;
}
