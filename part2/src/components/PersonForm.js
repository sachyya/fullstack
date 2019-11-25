import React from 'react'

const PersonForm = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
	    <div>
	      <p>name: <input value={props.newName} onChange={props.onNameChange} /></p>
	      <p>number: <input value={props.newNum} onChange={props.onNumChange} /></p>
	    </div>
	    <div>
	      <button type="submit">add</button>
	    </div>
  	</form>
  )
}

export default PersonForm