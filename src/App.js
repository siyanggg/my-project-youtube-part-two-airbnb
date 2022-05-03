import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [things, setThings] = useState(["Thing 1", "Thing 2"]);

  function addItem() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((preThingsArray) => [...preThingsArray, newThingText]);
  }

  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}
