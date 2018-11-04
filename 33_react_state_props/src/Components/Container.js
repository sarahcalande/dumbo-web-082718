import React, { Component } from "react";
import Card from "./Card";
import BeyForm from "./BeyForm";
// import { BeyImages, JayImages } from "../images";


// // 1. Update app to include two separate lists of Bey images and Jay-Z images fetched from db.json server. To start the server, install json-server by running `npm install -g json-server`,
//  then running `json-server --watch db.json --port 3001`. You'll now be able to fetch from `http://localhost:3001/bey` and `http://localhost:3001/jay`
// // 2. Both should have a form to add images (doesn't need to persist)
// 3. Each image should have a button to favorite that image (doesn't need to persist)
// 4. Have a filter button for both lists that allows the user to filter favorite images (ie only show favorites, or show all).
// 5. Have a delete button that removes an image from a list (doesn't need to persist).
// 6. BONUS: Make new images persist via POST request.
// 7. BONUS: Make favoriting an image persist via PATCH request.
// 8. BONUS: Make deleting an image persist via DELETE request.
// 9. BONUS: Have an update button for each image that renders an update form to change the name of the image (doesn't need to persist).
// 10. SUPER BONUS: Make the updated name of an image persist via PATCH request.

class Container extends Component {
  state = {
    statebeyimages: [],
    statejayimages: [],
    renderOrNah: true
  };


fetchthings = ()=>{
fetch('http://localhost:3001/bey')
  .then(r=>r.json())
  .then(data => this.setState({
    statebeyimages: data}))
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
      if (this.state.statebeyimages)
      {let newArray = [...this.state.statebeyimages, obj];
      this.setState({
      statebeyimages: newArray
      });
    } else if (this.state.statejayimages)
    {let newArray = [...this.state.statejayimages, obj];
    this.setState({
    statejayimages: newArray
    });
  }
};
//
//   // beyCards() {
//   //   return BeyImages.map(beyObj => <BeyCard />);
//   // }
//
//
  render(){

// let beyCards = this.state.statebeyimages.map(obj => <Card key = {obj.name} name = {obj.name} img = {obj.img}/>)
//
// let jayCards = this.state.statejayimages.map(obj => <Card key = {obj.name} name = {obj.name} img = {obj.img}/>)
//

    return (
      <div>
        <BeyForm submitHandler={this.submitHandler} />
        {this.state.renderOrNah ? (
        < Card beyCards Card jayCards/>
        ) : (
          <h1 onClick={this.clickHandler}>Not Rendered</h1>
        )}

      </div>

    );
}


}

export default Container;
