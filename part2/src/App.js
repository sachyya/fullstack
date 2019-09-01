import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [newFilter, setFilter] = useState('')

  const onNameChange = (e) => {
    setNewName(e.target.value)
  }

  const onNumChange = (e) => {
    setNewNum(e.target.value)
  }
  

  const onFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const formSubmit = (event) => {
    persons.forEach(person => {
      if(person.name === newName ){
        alert(`${newName} is already added to phonebook`)
      }
    });

    event.preventDefault()
    const newPersons = {
      name: newName,
      number: newNum
    }
    setPersons(persons.concat(newPersons))
    setNewName('')
    setNewNum('')
  }

  const personsToShow = newFilter === '' ? persons : persons.filter(person => {
      return person.name.toUpperCase().includes(newFilter.toUpperCase())
  })

  return (
    <div>
      <Filter value={newFilter} onChange={onFilterChange} />
      <h2>Phonebook</h2>
      <PersonForm onSubmit={formSubmit} newName={newName} onNameChange={onNameChange} newNum={newNum} onNumChange={onNumChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App