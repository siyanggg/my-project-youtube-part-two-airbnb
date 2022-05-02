import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import data from "./data/data";

export default function App() {
  const destinations = data.map((item) => {
    return <Destination key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section>{destinations}</section>
    </div>
  );
}
