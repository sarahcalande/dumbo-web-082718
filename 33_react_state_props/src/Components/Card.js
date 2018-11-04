import React from "react";




const Card = (props, state) => {


function likeImage(e){
  e.target.parentElement.innerHTML += '<3'
}


  return (

    <div>
      <h1>{props.state.name}</h1>
      <img src={props.obj.img} alt="" onClick={props.clickHandler} />
      <button onClick={likeImage}> Favorite </button>

    </div>
  );
};

export default Card;
