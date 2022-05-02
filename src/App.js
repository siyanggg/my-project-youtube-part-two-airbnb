import React from "react";
import Contact from "./components/Contact";
import Joke from "./components/Joke";
import jokesData from "./data/jokesData";

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}
