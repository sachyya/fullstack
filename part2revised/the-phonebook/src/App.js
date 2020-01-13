import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons] = useState([]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setFilter] = useState('')

  useEffect( () => {
    axios
      .get('http://172.16.238.10:3004/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [] )
 
  const personsToShow = newFilter
  ? persons.filter(person=> person.name.toLowerCase().includes(newFilter.toLowerCase()))
  : persons

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const handleInputChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const checkPerson = () => {
    return persons.filter(person => Object.values(person).includes(newName) ).length > 0
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if ( checkPerson() ) {
      alert(`${newName} is already added to phonebook`)
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

      <h2>add a new</h2>

      <PersonForm 
        handleOnSubmit={handleOnSubmit}
        newName={newName}
        handleInputChange={handleInputChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App