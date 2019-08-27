import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = (props) => <h2>{props.title}</h2>

const Button = (props) => {
	return(
		<button onClick={props.onClick}>{props.text}</button>
	)
}

const Statistics = ({statistics}) => {

	// console.log(statistics);
	// if (statistics[4].value === 0 ) {
	// 	return <p>No feedbacks given</p>
	// }

		return(
			statistics.forEach(statistic => {
				<p>{statistic.text}: {statistic.value}</p>
			})
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

	let statistics = [
		{
			text: 'good',
			value: good
		},
		{
			text: 'bad',
			value: bad
		},
		{
			text: 'neutral',
			value: neutral
		},
		{
			text: 'total',
			value: total()
		},
		{
			text: 'average',
			value: average()
		},
		{
			text: 'positive',
			value: precentage()
		}
	]

	// console.log(statistics)
	return (
		<div>
			<Heading title="give feedback"/>			
			<Button onClick={goodClick} text="good" />			
			<Button onClick={neutralClick} text="neutral" />			
			<Button onClick={badClick} text="bad" />			
			
			<Heading title="statistics"/>	
			<Statistics statistics={statistics} />
		</div>
	)
}

ReactDOM.render(<App />, 
	document.getElementById('root')
)