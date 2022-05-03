import { React, useState } from "react";
import boxes from "./data/boxes";
import Box from "./components/Box";

export default function App(props) {
  const [squares, setsquares] = useState(boxes);

  const squareElements = squares.map((square) => (
    <Box on={squares.on} key={square.id} />
  ));

  return (
    <main>
      <h1>{squareElements}</h1>
    </main>
  );
}
