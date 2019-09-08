import React from "react";
import {useCounterContext} from '../context/CounterContext'

const Counter = () => {
	const {counter, increment, decrement} = useCounterContext()
	return (
		<div>
			<h2>{counter}</h2>
			<button className="incrementButton" onClick={increment}> +1 </button>
			<button className="decrementButton" onClick={decrement}> -1 </button>
		</div>
	);
}

export default Counter;