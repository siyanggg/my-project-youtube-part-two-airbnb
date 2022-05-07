import { React, useState } from "react";

export default function Counter(props) {
  const { number } = props;
  const [count, setCount] = useState(0);

  console.log("Counter component rendered.");

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <div className="counter--count">
      <h1>Counter example:</h1>
      <div>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={reset}>Reset</button>
      </div>
      <h3>The count is: {count}</h3>
    </div>
  );
}
