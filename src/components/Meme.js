import { React, useState } from "react";
import memesData from "../data/memesData.js";

export default function Meme(props) {
  const [memeImage, setMemeImage] = useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
    console.log("new image is: ", memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} className="meme--image" />{" "}
    </main>
  );
}
