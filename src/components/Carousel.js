import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  constructor(props) {
    super(props);
    this.items = props.items;
  }

  render() {
    return (
      <Carousel
        width="50%"
        autoPlay="true"
        interval="3000"
        infiniteLoop="true"
        emulateTouch="true"
      >
        {this.items.map((item) => (
          <div key={item.id}>
            <img src={item.imgSource} alt="card" />
            <h1 className="legend">
              {item.price}$ {item.name}
            </h1>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default DemoCarousel;
