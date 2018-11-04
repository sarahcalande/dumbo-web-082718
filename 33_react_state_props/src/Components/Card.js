import React, {Component} from "react";




class Card extends Component{


likeImage=(e)=>{
  e.target.parentElement.innerHTML += '<3'
}

render(){
  return (
    <div>
      <h1>{this.props.name}</h1>
      <img src={this.props.img} alt="" onClick={this.props.clickHandler} />
      <button onClick={this.likeImage}> Favorite </button>

    </div>
  );
}
};

export default Card;
