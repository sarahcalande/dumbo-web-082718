import React from "react"

class HogCard extends React.Component {
  state = {
    clicked: false
  }

  hogImg(){
    return this.props.hog.name.split(" ").join("_").toLowerCase()
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  addDetails(){
    const { greased, specialty } = this.props.hog
    const highest = this.props.hog["highest medal achieved"]
    const weight = this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
    return (
      <div>
        <p>Highest Medal: {highest}</p>
        <p>Specialty: {specialty}</p>
        <p>Weight: {weight}</p>
        <p>{greased ? "Greasy AF" : "No grease :("}</p>
      </div>
    )
  }

  render(){
    const { name } = this.props.hog
    return (
      <div className="ui eight wide column" onClick={this.handleClick}>
      <h1>{name}</h1>
      <img src={`/hog-imgs/${this.hogImg()}.jpg`} alt={name}/>
      {this.state.clicked && this.addDetails() }
      {/* this.state.clicked ? this.addDetails() : null */ }
      </div>
    )
  }
}

export default HogCard
