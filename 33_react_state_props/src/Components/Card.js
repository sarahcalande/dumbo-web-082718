import React, {Component} from "react";
import BeyForm from './BeyForm.js'



let beyurl = "http://localhost:3001/bey"

class Card extends Component{

state = {
  [e.target.parentElement.innerHTML]: null
}

renderUpdate=(e)=>{
  this.setState({
      [e.target.parentElement.innerHTML]: <BeyForm />
  })
}


deleteImage = (e) => {
    let data = e.target.parentElement
    data.remove()
    deleteFetch()
 function deleteFetch(data){
  fetch(`url/${data}`,
    {
   method: 'DELETE',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   }
 })
}
}


likeImage=(e)=>{
  e.target.parentElement.innerHTML += '<3'
}

render(){
  return (
    <div>
      <h1>{this.props.name}</h1>
      <img src={this.props.img} alt="" onClick={this.props.clickHandler} />
      <button id="fav"onClick={this.likeImage}> Favorite </button>
      <button onClick={this.deleteImage}> Delete </button>
      <button onClick={this.renderUpdate}> Update </button>
    </div>
  );
}
};

export default Card;
