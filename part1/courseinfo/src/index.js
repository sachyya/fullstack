import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = (props) => <h2>{props.title}</h2>

const Button = (props) => {
	return(
		<button onClick={props.onClick}>{props.text}</button>
	)
}

const Statistics = (props) => {
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

			<Statistics text="good" counter={good}/>			
			<Statistics text="neutral" counter={neutral}/>			
			<Statistics text="bad" counter={bad}/>			
			<Statistics text="total" counter={total()}/>			
			<Statistics text="average" counter={average()}/>			
			<Statistics text="positive" counter={precentage()}/>			
		</div>
	)
}

ReactDOM.render(<App />, 
	document.getElementById('root')
)