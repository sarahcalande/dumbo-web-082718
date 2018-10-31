import React, { Component } from "react";
import BeyCard from "./BeyCard";
import { BeyImages, JayImages } from "../images";

class BeyContainer extends Component {
  state = {
    beyImages: BeyImages,
    renderOrNah: true
  };

  clickHandler = () => {
    console.log("in clickHandler");
    this.setState({
      renderOrNah: !this.state.renderOrNah
    });
  };

  // beyCards() {
  //   return BeyImages.map(beyObj => <BeyCard />);
  // }
  render() {
    let beyCards = this.state.beyImages.map(beyObj => (
      <BeyCard
        key={beyObj.name}
        beyObj={beyObj}
        clickHandler={this.clickHandler}
      />
    )); //[<BeyCard />, <BeyCard />, ...]
    return (
      <div>
        {this.state.renderOrNah ? (
          beyCards
        ) : (
          <h1 onClick={this.clickHandler}>FullSnack Devs</h1>
        )}
      </div>
    );
  }
}

export default BeyContainer;
