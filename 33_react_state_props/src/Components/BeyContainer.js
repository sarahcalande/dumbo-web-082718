import React, { Component } from "react";
import BeyCard from "./BeyCard";
import { BeyImages, JayImages } from "../images";

class BeyContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     beyImages: BeyImages,
  //     renderOrNah: true
  //   };
  // }
  state = {
    beyImages: BeyImages,
    renderOrNah: false
  };
  // beyCards() {
  //   return BeyImages.map(beyObj => <BeyCard />);
  // }
  render() {
    console.log(this.state.test);
    let beyCards = this.state.beyImages.map(beyObj => (
      <BeyCard key={beyObj.name} beyObj={beyObj} />
    )); //[<BeyCard />, <BeyCard />, ...]
    return <div>{this.state.renderOrNah ? beyCards : "FullSnack Devs"}</div>;
  }
}

export default BeyContainer;
