import { React, useEffect, useState } from "react";
import Box from "./components/Box/Box";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import Header from "./components/General/Header";
import Joke from "./components/Joke/Joke";
import Meme from "./components/Meme/Meme";
import MessageUnread from "./components/MessageUnread/MessageUnread";

import JokesData from "./data/jokesData/JokesData";
import BoxData from "./data/boxData/BoxData";
import MemesData from "./data/memesData/MemesData";

export default function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [squares, setSquares] = useState(BoxData);

  // counter

  // api
  useEffect(() => {
    console.log("Effect ran");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  // joke
  const jokeElements = JokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });

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
      <Counter />
      <hr />
      <h1>Joke example:</h1>
      <div>{jokeElements}</div>

      <div>
        <Header />
        <Meme />
      </div>
      <hr />

      <Form />
      <hr />

      <MessageUnread />
      <hr />

      <main>
        <h1>Square toggle example:</h1>
        <h1>{squareElements}</h1>
      </main>
    </div>
  );
}
