import React, { Component } from "react";

class BeyForm extends Component {
  state = {
    name: "",
    img: ""
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //setState can change our state and trigger a rerender everytime it changes
  //what if? we trigger a rerender of our form wit hthe updated value every time a user types
  render() {
    return (
      <form onSubmit={e => this.props.submitHandler(e, this.state)}>
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.changeHandler}
          name="name"
        />
        <input
          type="text"
          placeholder="image source"
          value={this.state.image}
          onChange={this.changeHandler}
          name="img"
        />
        <button>Lay Tha Slay</button>
      </form>
    );
  }
}

export default BeyForm;
