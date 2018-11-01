import React, { Component } from "react";
import BeyCard from "./BeyCard";
import BeyForm from "./BeyForm";
import { BeyImages, JayImages } from "../images";

class BeyContainer extends Component {
  state = {
    beyImages: BeyImages,
    renderOrNah: true
  };

  // componentDidMount() {
  //   fetch("https://pokeapi.co/api/v2/evolution-chain/?limit=20&offset=20/")
  //     .then(resp => resp.json())
  //     .then(data =>
  //       this.setState({
  //         beyImages: data
  //       })
  //     );
  // }

  clickHandler = () => {
    console.log("in clickHandler");
    this.setState({
      renderOrNah: !this.state.renderOrNah
    });
  };

  submitHandler = (e, obj) => {
    e.preventDefault();
    console.log("logging", obj);
    //spread operator
    //accomplishes the same thing as a push() but rather than using the same array and changing the content, which js will not recognize as a new array. We are creating a brand new array and then adding the object to that new array
    let newArray = [...this.state.beyImages, obj];
    this.setState({
      beyImages: newArray
    });
  };

  render() {
    console.log("BeyContainer Render", this.state.renderOrNah);
    let beyCards = this.state.beyImages.map(beyObj => (
      <BeyCard
        key={beyObj.name}
        beyObj={beyObj}
        clickHandler={this.clickHandler}
        render={this.state.renderOrNah}
      />
    ));
    return (
      <div>
        <BeyForm submitHandler={this.submitHandler} />
        {beyCards}
      </div>
    );
  }
}

export default BeyContainer;
