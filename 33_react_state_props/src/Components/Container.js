import React, { Component } from "react";
import Card from "./Card";
import BeyForm from "./BeyForm";
import FilterButton from './filterbutton.js'
// import { BeyImages, JayImages } from "../images";


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


componentDidMount = ()=>{
fetch('http://localhost:3001/bey')
  .then(r=>r.json())
  .then((data)=> this.setState({
    statebeyimages: data}))

    fetch('http://localhost:3001/jay')
      .then(r=>r.json())
      .then((data) => this.setState({
        statejayimages: data}))
}

  clickHandler = () => {
    console.log("in clickHandler");
    this.setState({
      renderOrNah: !this.state.renderOrNah
    });
  };


   filterFunction=(e)=>{
     let favbutton = document.querySelectorAll('#fav')
      favbutton.forEach( (button) => {
        let filtered = button.parentElement.textContent.includes('<3')
      this.setState({
        statebeyimages: filtered
      })
        })
    }



  submitHandler = (e, obj) => {
    e.preventDefault();
    //spread operator
    //accomplishes the same thing as a push() but rather than using the same array and changing the content, which js will not recognize as a new array. We are creating a brand new array and then adding the object to that new array
      if (this.state.statebeyimages){
    let newArray = [...this.state.statebeyimages, obj];
      this.setState({
      statebeyimages: newArray
    }, ComponentDidUpdate()
  } else if (this.state.statejayimages){
  let newArray = [...this.state.statejayimages, obj];
  this.setState({
  statejayimages: newArray
}, ComponentDidUpdate()
}
}



ComponentDidUpdate=()=>{
  fetch('http://localhost:3001/bey/obj',
      {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        obj
        })
      })

  fetch('http://localhost:3001/jay/obj', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    obj
  })
})
}


//
//   // beyCards() {
//   //   return BeyImages.map(beyObj => <BeyCard />);
//   // }
//
//
  render(){


let JayCards = this.state.statejayimages.map(obj => <Card key={obj.name} name={obj.name} img = {obj.img}/>)

let beyCards = this.state.statebeyimages.map(obj => <Card key = {obj.name} name = {obj.name} img = {obj.img}/>)

    return (
      <div>
      <FilterButton filterFunction={this.filterFunction}/>
                  <BeyForm submitHandler={this.submitHandler} />
        {this.state.renderOrNah ? (
          <div>
          <div>
        {beyCards}
        </div>
        <div>
          <BeyForm submitHandler={this.submitHandler} />
            <FilterButton filterFunction={this.filterFunction}/>
        {JayCards}
        </div>
        </div>
        ) : (
          <h1 onClick={this.clickHandler}>Not Rendered</h1>
        )}

      </div>

    );
}


}

export default Container;
