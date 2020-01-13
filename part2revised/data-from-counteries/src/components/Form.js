import React from 'react'

const Form = ({handleFilterChange}) => {
	return (
		<div>
			find counteries <input onChange={handleFilterChange} />
		</div>
	)
}

export default Form