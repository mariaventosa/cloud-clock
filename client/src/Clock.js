// Clock component
import React from 'react';

// Clock class
class Clock extends React.Component {
	// called when clock is initialized
	constructor(props) {
		super(props);
		// sets initial state
		this.state = {
			time: new Date().toLocaleString()
		};
	}
	// called when component inserted in DOM
	componentDidMount() {
		// set time interval to make update
		this.intervalID = setInterval(
			() => this.tick(), 
			1000
		);
	}
	// called when component removed from DOM
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	tick() {
		// use setState to update state
		this.setState({
			time: new Date().toLocaleString()
		});
	}
	// returns element
	render() {
		return (
			<p> 
				The local time is {this.state.time}
			</p>
		);
	}
}

export default Clock;