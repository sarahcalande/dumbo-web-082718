import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				<button onClick={props.toggleGreased}>Filter Greased: {props.filterGreased ? "ON" : "OFF"}</button>
				<label htmlFor="sort"> Sort By:</label>
				<select value={props.sortBy} onChange={props.toggleSort} name="sort">
					<option value="all">All</option>
					<option value="name">Name</option>
					<option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">Weight</option>
				</select>
			</div>
		</div>
	)
}

export default Nav
