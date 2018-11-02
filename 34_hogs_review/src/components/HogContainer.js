import React from "react"
import HogCard from "./HogCard"

const HogContainer = (props) => {
  const hogCards = props.hogs.map(hog => <HogCard key={hog.name} hog={hog} />)
  return (<div className="ui grid container">{hogCards}</div>)
}

export default HogContainer
