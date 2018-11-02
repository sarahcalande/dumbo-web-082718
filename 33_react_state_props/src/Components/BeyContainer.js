import React, { Component } from "react";
import BeyCard from "./BeyCard";
import BeyForm from "./BeyForm";
import Button from "./Button";
import { BeyImages, JayImages } from "../images";

class BeyContainer extends Component {
  state = {
    beyImages: BeyImages,
    renderOrNah: true,
    dogImage: ""
  };

  componentDidMount() {
    this.fetchDogs();
  }

  fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          dogImage: data.message //evaluate to the image string from the data object
        })
      );
  }
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
    console.log("BeyContainer Render", this.state);
    let beyCards = this.state.beyImages.map(beyObj => (
      <BeyCard
        key={beyObj.name}
        beyObj={beyObj}
        dogImage={this.state.dogImage}
        clickHandler={this.clickHandler}
        render={this.state.renderOrNah}
      />
    ));
    return (
      <div>
        <BeyForm submitHandler={this.submitHandler} />
        <Button
          render={this.state.renderOrNah}
          clickHandler={this.clickHandler}
        />
        {beyCards}
      </div>
    );
  }
}

export default BeyContainer;
