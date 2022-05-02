import React from "react";

export default function Joke(props) {
  return (
    <div>
      <p>{props.Setup}</p>
      <p>{props.Punchline}</p>
    </div>
  );
}
