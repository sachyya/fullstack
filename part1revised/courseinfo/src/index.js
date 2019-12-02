import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}

const Part = (props) => {
	return(
		<p>{props.part.name} {props.part.exercises}</p>
	)
}

const Content = (props) => {
	return(
		<div>
			<Part part={props.parts[0]} />
			<Part part={props.parts[1]} />
			<Part part={props.parts[2]} />
		</div>
	)
}

const Total = (props) => {
	console.log(props);
	return(
		<p>Number of exerceise {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises }</p>
	)
}

const App = () => {
	const course = 'Half Stack application development'
	const parts = [
	    {
	      name: 'Fundamentals of React',
	      exercises: 10
	    },
	    {
	      name: 'Using props to pass data',
	      exercises: 7
	    },
	    {
	      name: 'State of a component',
	      exercises: 14
	    }
  	]

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total total={parts} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))