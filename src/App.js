import { React, useEffect, useState, useReducer } from "react";
import Box from "./components/Box/Box";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import Header from "./components/General/Header";
import Joke from "./components/Joke/Joke";
import Meme from "./components/Meme/Meme";
import MessageUnread from "./components/MessageUnread/MessageUnread";
import UseReducerHook from "./components/UseReducerHook/UseReducerHook";
import UseReducerHookIncrement from "./components/UseReducerHook/UseReducerHookIncrement";
import UseReducerHookTodos from "./components/UseReducerHook/UseReducerHookTodos";

import BoxData from "./data/boxData/BoxData";
import MemesData from "./data/memesData/MemesData";

export default function App() {
  const [squares, setSquares] = useState(BoxData);

  // box
  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
  ));

  return (
    <div>
      <h1>UseReducer Hook</h1>
      <UseReducerHook />
      <hr />

      <h1>UseReducer Hook Increment</h1>
      <UseReducerHookIncrement />
      <hr />

      <h1>UseReducer Hook Todos</h1>
      <UseReducerHookTodos />
      <hr />

      <h1>Counter Example</h1>
      <Counter />
      <hr />

      <h1>Joke example:</h1>
      <Joke />
      <hr />

      <h1>Meme example</h1>
      <div>
        <Header />
        <Meme />
      </div>
      <hr />

      <h1>Form example</h1>
      <Form />
      <hr />

      <h1>MessageUnread example</h1>
      <MessageUnread />
      <hr />

      <main>
        <h1>Square toggle example:</h1>
        <h1>{squareElements}</h1>
      </main>
    </div>
  );
}
