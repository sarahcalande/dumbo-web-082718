import React from "react";

const BeyCard = props => {
  return (
    <div>
      <h1>{props.beyObj.name}</h1>
      <img src={props.beyObj.img} alt="" onClick={props.clickHandler} />
    </div>
  );
};

export default BeyCard;
