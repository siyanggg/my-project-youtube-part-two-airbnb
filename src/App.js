import { React, useState } from "react";
import boxes from "./data/boxes";
import Box from "./components/Box";

export default function App(props) {
  const [squares, setSquares] = useState(boxes);

  // goal is to give the toggle function the ability to know which box was clicked,
  // so we can correctly update the state array.

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  // const squareElements = squares.map((square) => (
  //   <Box on={squares.on} key={square.id} />
  // ));

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
  ));

  return (
    <main>
      <h1>{squareElements}</h1>
    </main>
  );
}
