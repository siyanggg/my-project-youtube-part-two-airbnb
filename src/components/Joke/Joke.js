import { React, useEffect, useState } from "react";
import JokeComponent from "./component/JokeComponent";
import JokesData from "../../data/jokesData/JokesData";

export default function Joke() {
  const jokeElements = JokesData.map((joke) => {
    return <JokeComponent setup={joke.setup} punchline={joke.punchline} />;
  });

  return <div>{jokeElements}</div>;
}
