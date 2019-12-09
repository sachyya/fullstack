import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({courses}) => {
	const rows = () => courses.map((course, i) => {
		return(
			<div>
				<Header key={course.id} name={course.name} />
				<Content key={course.id} parts={course.parts} courseid={course.id} />
				<Total key={course.id} parts={course.parts} />
			</div>
		)
	})

	return(
		rows()
	)
}

export default Course