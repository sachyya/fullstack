import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => (
		<button onClick={onClick} >
			{text}
		</button>
	)

const App = (props) => {
	const [counter, setCounter ] = useState(0)
  	
	const setValue = (value) => setCounter(value)
  	return (
  		<div>
  			<Display counter={counter} />
	    	<Button onClick={() => setValue(counter + 1)} text="plus"/>
	    	<Button onClick={() => setValue(counter - 1)} text="minus"/>
	    	<Button onClick={() => setValue(0)} text="zero"/>
		</div>
  	)
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
)
