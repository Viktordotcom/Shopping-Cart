import React from "react";
import Carousel from "./Carousel";
import "./styles/Home.css";

function Home({ items }) {
  return (
    <div className="Home">
      <Carousel items={items} />
    </div>
  );
}

export default Home;
