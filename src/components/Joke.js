import { React, useState } from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);
  const [showPunchline, setShowPunchline] = useState("Show Punchline");

  function toggleShown() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  console.log(props.comments);
  return (
    <div>
      {props.setup ? <h3>Setup: {props.setup}</h3> : "No Setup."}
      <p>{isShown && props.punchline}</p>
      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <h3>{isShown}</h3>
      <hr />
    </div>
  );
}
