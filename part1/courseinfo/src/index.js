import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = (props) => <h2>{props.title}</h2>

const Button = (props) => {
	return(
		<button onClick={props.onClick}>{props.text}</button>
	)
}

const Statistic = ({text, value}) => {
	return(
		<tr>
			<th>{text}</th>
			<th>{value}</th>
		</tr>
	)
}

const Statistics = ({statistics}) => {

	if (statistics.total <= 0 ) {
		return <p>No feedbacks given</p>
	}
	return(
		<table>
			<tbody>
				<Statistic text="good" value={statistics.good}	/>
				<Statistic text="bad" value={statistics.bad}	/>
				<Statistic text="neutral" value={statistics.neutral}	/>
				<Statistic text="total" value={statistics.total}	/>
				<Statistic text="average" value={statistics.average}	/>
				<Statistic text="positive" value={statistics.precentage}	/>
			</tbody>
		</table>
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

	let statistics = 
	{
		bad: bad,
		good: good,
		neutral: neutral,
		total: total(),
		average: average(),
		precentage: precentage()
	}

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