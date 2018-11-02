import React from "react";

const Button = props => {
  return (
    <div>
      {props.render ? (
        <button onClick={props.clickHandler}>Dog</button>
      ) : (
        <button onClick={props.clickHandler}>Beyonce</button>
      )}
    </div>
  );
};

export default Button;
