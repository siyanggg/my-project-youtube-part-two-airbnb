import React from "react";

export default function Joke(props) {
  console.log(props.comments);
  return (
    <div>
      {props.setup ? <h3>Setup: {props.setup}</h3> : "No Setup."}
      <p>{props.punchline}</p>
      <hr />
    </div>
  );
}
