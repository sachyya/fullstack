import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
	const [counter, setCounter ] = useState(0)

	const setCounterValue = (value) => () => setCounter( value )
	return (
		<div>
			<div>{counter}</div>
			<button onClick={setCounterValue( counter + 1 )}>plus</button>
			<button onClick={setCounterValue(0)}>reset</button>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
