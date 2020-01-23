import React from 'react'

const Persons = ({deletePhone, personsToShow}) => {
	return(
		personsToShow.map((person, i) => 
	    	<p key={i}>{person.name} : {person.number}
	    	<button onClick={() => deletePhone(person.id)}>Delete</button></p>
	  	)
	)
} 

export default Persons