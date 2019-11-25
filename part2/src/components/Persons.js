import React from 'react'
import Person from './Person'

const Persons = (props) => {
	const personRows = () => props.personsToShow.map(person => 
	  <Person key={person.name} person={person} />
	)

  return(
    <ul>{personRows()}</ul>
  )
}

export default Persons