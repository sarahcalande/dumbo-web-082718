import React, { Component } from "react";

class BeyCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.beyObj.name}</h1>
        <img src={this.props.beyObj.img} alt="" />
      </div>
    );
  }
}

export default BeyCard;
