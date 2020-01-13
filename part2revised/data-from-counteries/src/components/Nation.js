import React from 'react'

const Nation = ({nation}) => {
	return (
		<div>
		  <h4>{nation.name}</h4>
		    <p>capital: {nation.capital}</p>
		    <p>population: {nation.population}</p>
		  <h6>Languages</h6>
		    {nation.languages.map((lang, i) => {
		      return (
		        <ul>
		          <li key={i}>{lang.name}</li>
		        </ul>
		      )
		    })}
		  <img alt={nation.name} src={nation.flag} />
		</div>
	)
}
export default Nation
