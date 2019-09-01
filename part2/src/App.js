import React, { useState } from 'react'
import Person from './components/Person'

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
  
  const personsToShow = newFilter === '' ? persons : persons.filter(person => {
      return person.name.toUpperCase().includes(newFilter.toUpperCase())
  })

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

  const personRows = () => personsToShow.map(person => 
    <Person key={person.name} person={person} />
  )

  return (
    <div>
      <div>debug: {newFilter}</div>
      <p>filter: <input value={newFilter} onChange={onFilterChange} /></p>
      <h2>Phonebook</h2>
      <form onSubmit={formSubmit}>
        <div>
          <p>name: <input value={newName} onChange={onNameChange} /></p>
          <p>number: <input value={newNum} onChange={onNumChange} /></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personRows()}
      </ul>
    </div>
  )
}

export default App