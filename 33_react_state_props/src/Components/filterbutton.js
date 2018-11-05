import React, { Component } from "react";
import Card from './Card.js'


export default class FilterButton extends Component{



render(){

return(
<button onClick={this.filterFunction}>Filter</button>
)
}


}
