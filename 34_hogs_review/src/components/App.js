import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';

class App extends Component {
  state = {
    filterGreased: false,
    sortBy: "all"
  }

  toggleGreased = (e) => {
    this.setState({
      filterGreased: !this.state.filterGreased
    })
  }

  toggleSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }


  filteredHogs(){
    if (this.state.filterGreased){
      return hogs.filter(hog => hog.greased)
    } else {
      return hogs
    }
  }

  sortedHogs(){
    if (this.state.sortBy === "all"){
      return this.filteredHogs()
    } else {
      return [...this.filteredHogs()].sort((a,b) => {
        if (a[this.state.sortBy] < b[this.state.sortBy]){
          return -1
        } else if (a[this.state.sortBy] > b[this.state.sortBy]) {
          return 1
        } else {
          return 0
        }
      })
    }
  }


  render() {
    return (
      <div className="App">
        <Nav
          toggleGreased={this.toggleGreased}
          toggleSort={this.toggleSort}
          sortBy={this.state.sortBy}
          filterGreased={this.state.filterGreased}
        />
        <HogContainer hogs={this.sortedHogs()}/>
      </div>
    )
  }
}

export default App;
