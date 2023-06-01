import React, { useState } from 'react';
import './BasicOfReact.css';

const BasicOfReact = () => {
	  const [count, setCount] = useState(0);

	  const incrementCount = () => {
		      setCount(count + 1);
		    };

	  const decrementCount = () => {
		      setCount(count - 1);
		    };

	  return (
		      <div className="basic-of-react">
		        <h1>Basic of React</h1>
		        <p>Count: {count}</p>
		        <button onClick={incrementCount}>Increment</button>
		        <button onClick={decrementCount}>Decrement</button>
		      </div>
		    );
};

export default BasicOfReact;

