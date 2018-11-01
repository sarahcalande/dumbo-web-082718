import React, { Component } from "react";

class BeyCard extends Component {
  componentDidMount() {
    console.log("BeyCard componentDidMount()");
  }

  componentDidUpdate() {
    console.log("BeyCard Did Update");
  }

  render() {
    console.log("BeyCard Render");
    let render = this.props.render;
    return (
      <div>
        {render ? (
          <div>
            <h1>{this.props.beyObj.name}</h1>
            <img
              src={this.props.beyObj.img}
              alt=""
              onClick={this.props.clickHandler}
            />
          </div>
        ) : (
          <h1 onClick={this.props.clickHandler}>FullSnack Devs</h1>
        )}
      </div>
    );
  }
}

export default BeyCard;

// return (
//   <div>
//     <h1>{this.props.beyObj.name}</h1>
//     <img
//       src={this.props.beyObj.img}
//       alt=""
//       onClick={this.props.clickHandler}
//     />
//   </div>
// );
