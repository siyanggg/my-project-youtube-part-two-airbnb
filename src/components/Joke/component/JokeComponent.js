import { React, useState } from "react";
import JokesData from "../../../data/jokesData/JokesData";

export default function JokeComponent(props) {
  const { setup, punchline } = props;
  const [isShown, setIsShown] = useState(false);
  const [showPunchline, setShowPunchline] = useState("Show Punchline");

  function toggleShown() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  return (
    <div>
      {setup ? <h3>Setup: {setup}</h3> : "No Setup."}
      <p>{isShown && punchline}</p>
      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <h3>{isShown}</h3>
      <hr />
    </div>
  );
}
