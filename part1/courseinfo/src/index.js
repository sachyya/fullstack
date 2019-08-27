import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = (props) => <h2>{props.title}</h2>

const Button = (props) => {
	return(
		<button onClick={props.onClick}>{props.text}</button>
	)
}

const Result = (props) => {
	return(
		<p>{props.text}: {props.counter}</p>
	)
}

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const goodClick = () => {
		setGood( good + 1 )
	}

	const neutralClick = () => {
		setNeutral( neutral + 1 )
	}

	const badClick = () => {
		setBad( bad + 1 )
	}

	const total = () => good + bad + neutral

	const precentage = () => ( good/total() ) * 100 + ' %'
	const average = () => ( total()/3 )

	return (
		<div>
			<Heading title="give feedback"/>			
			<Button onClick={goodClick} text="good" />			
			<Button onClick={neutralClick} text="neutral" />			
			<Button onClick={badClick} text="bad" />			
			<Heading title="statistics"/>	

			<Result text="good" counter={good}/>			
			<Result text="neutral" counter={neutral}/>			
			<Result text="bad" counter={bad}/>			
			<Result text="total" counter={total()}/>			
			<Result text="average" counter={average()}/>			
			<Result text="positive" counter={precentage()}/>			
		</div>
	)
}

ReactDOM.render(<App />, 
	document.getElementById('root')
)