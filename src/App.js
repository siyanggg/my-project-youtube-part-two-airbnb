import { React, useEffect, useState } from "react";
import Box from "./components/Box/Box";
import Count from "./components/Count/Count";
import Form from "./components/Form/Form";
import Header from "./components/General/Header";
import Joke from "./components/Joke/Joke";
import Meme from "./components/Meme/Meme";

import JokesData from "./data/jokesData/JokesData";
import BoxData from "./data/boxData/BoxData";
import MemesData from "./data/memesData/MemesData";

export default function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState(["a", "b"]);
  const [squares, setSquares] = useState(BoxData);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsLetter: false,
  });

  // count
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  console.log("App component rendered.");

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

  // meme
  const memes = MemesData.map((item) => {
    return <Meme key={item.id} {...item} />;
  });

  // login
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
    }

    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }

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
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>

      <div>{jokeElements}</div>
      {/* <div>
        <Header />
        <Meme />
      </div> */}

      {/* <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="form--input"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="form--input"
            name="passwordConfirm"
            onChange={handleChange}
            value={formData.passwordConfirm}
          />

          <div className="form--marketing">
            <input
              id="okayToEmail"
              type="checkbox"
              name="joinedNewsletter"
              onChange={handleChange}
              checked={formData.joinedNewsletter}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button className="form--submit">Sign up</button>
        </form>
      </div>

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

      <main>
        <h1>{squareElements}</h1>
      </main> */}
    </div>
  );
}
