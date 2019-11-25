import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}

const Part = (props) => {
	return(
		<p>{props.part} {props.number}</p>
	)
}

const Content = (props) => {
	return(
		<div>
			<Part part={props.part1} number={props.exercise1} />
			<Part part={props.part2} number={props.exercise2} />
			<Part part={props.part3} number={props.exercise3} />
		</div>
	)
}

const Total = (props) => {
	return(
		<p>Number of exerceise {props.total}</p>
	)
}

const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	return (
		<div>
			<Header course={course} />
			<Content part1={part1} part2={part2} part3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
			<Total total={exercises1 + exercises2 + exercises3} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))