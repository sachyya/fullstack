import React from 'react'
import Part from './Part'

const Content = ({parts, courseid}) => {
	const rows = () => parts.map(part => {
		return <Part key={part.id + '.' + courseid} part={part.name} exercises={part.exercises} />
	})
  return (
    <div>
    	{rows()}
    </div>
  )
}

export default Content
