import React, { Component } from "react";

class Counter extends Component {
	constructor(props){
		super(props)
		this.state = {
			counter: 0
		}
		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
	}
	
	increment(){
		this.setState({
			counter: this.state.counter + 1
		})
	}

	decrement(){
		this.setState({
			counter: this.state.counter - 1
		})
	}

	render() {
        
		return (
			<div>
				<h2>{this.state.counter}</h2>
				<button className="incrementButton" onClick={this.increment}> +1 </button>
                <button className="decrementButton" onClick={this.decrement}> -1 </button>

			</div>
		);
	}
}

export default Counter;