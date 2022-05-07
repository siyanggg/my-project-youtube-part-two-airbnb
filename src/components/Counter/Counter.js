import { React, useState, useEffect } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const [starWarsData, setStarWarsData] = useState({});

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

  // api
  useEffect(() => {
    console.log("Effect ran");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);
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
