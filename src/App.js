import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [count, setCount] = useState(0);

  function minus() {
    setCount(function (oldValue) {
      return oldValue - 1;
    });
  }

  function plus() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="counter">
      <button className="counter--minus" onClick={minus}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={plus}>
        +
      </button>
    </div>
  );
}
