import React from 'react'
import Nation from './Nation'
import Nations from './Nations'

const Result = ({newNations, newFilter}) => {
	const filteredNations = newNations.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()) )

	const rows = () => {
	  if ( filteredNations.length < 10 && filteredNations.length > 1 ) {
	    return (
	    	<Nations nations={filteredNations} />
	    )
	  } else if( filteredNations.length === 1 ) {
	    return(
	      <Nation nation={filteredNations[0]} />
	    )
	  } else if( filteredNations.length > 10 ) {
	    return <p>Too many matches, specify another filter</p>
	  } else {
	    return <p>No country found!!!</p>
	  }
	} 

	return (
		<div>
			{rows()}
		</div>
	)
}

export default Result