import React from 'react'

const PersonForm = ({handleOnSubmit, newName, handleInputChange, newNumber, handleNumberChange}) => {
	return(
		<form onSubmit={handleOnSubmit}>
	        <div>
	          name: <input value={newName} onChange={handleInputChange}/>
	        </div>
	        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
	        <div>
	          <button type="submit">add</button>
	        </div>
	      </form>
	)
}

export default PersonForm