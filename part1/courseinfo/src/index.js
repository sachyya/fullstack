import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
	console.log(useState());


	const [counter, setCounter ] = useState(0)

	setTimeout(
		() => setCounter(counter + 1),
		1000
	)

	return (
		<div>{counter}</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
