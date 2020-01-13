import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form'
import Result from './components/Result'

const App = () => {
  const [ newFilter, setFilter] = useState('')
  const [ newNations, setNations] = useState([])

  useEffect( () => {
  	axios
	    .get('https://restcountries.eu/rest/v2/all')
	    .then(response => {
		     const nations = response.data
		     setNations(nations)
	    })
  }, [] )

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
   		<Form handleFilterChange={handleFilterChange}/>
      <Result newFilter={newFilter} newNations={newNations} />
    </div>
  );
}

export default App;