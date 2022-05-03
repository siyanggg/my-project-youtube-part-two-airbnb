import { React, useState } from "react";
import Count from "./components/Count";

export default function App() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState(["a", "b"]);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  console.log("App component rendered.");

  return (
    // <div className="counter">
    //   <button className="counter--minus" onClick={subtract}>
    //     –
    //   </button>
    //   <Count number={count} />
    //   <button className="counter--plus" onClick={add}>
    //     +
    //   </button>
    // </div>
    <div>
      {messages.length === 0 ? (
        <h1>You are all caught up!</h1>
      ) : (
        <h1>
          You have {messages.length} unread{" "}
          {messages.length > 1 ? "messages" : "message"}
        </h1>
      )}
    </div>
  );
}
