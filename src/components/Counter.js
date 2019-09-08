import React, { useState } from "react";


const Counter = () => {
	const [counter, setCounter] = useState(0)

	return (
		<div>
			<h2>{counter}</h2>
			<button className="incrementButton" onClick={() => setCounter((count) => count + 1) }> +1 </button>
			<button className="decrementButton" onClick={() => setCounter((count) => count - 1) }> -1 </button>
		</div>
	);
}
export default Counter;