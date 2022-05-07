import { React, useState } from "react";

export default function Counter(props) {
  const { number } = props;
  console.log("Counter component rendered.");
  return (
    <div className="counter--count">
      <h3>The count is: {number}</h3>
    </div>
  );
}
