import React from 'react'

const Persons = ({personsToShow}) => {
	return(
		personsToShow.map((person, i) => 
	    	<p key={i}>{person.name} : {person.number}</p>
	  	)
	)
} 

export default Persons