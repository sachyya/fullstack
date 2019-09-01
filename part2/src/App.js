import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')

  const onNameChange = (e) => {
    setNewName(e.target.value)
  }

  const onNumChange = (e) => {
    setNewNum(e.target.value)
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

  const personRows = () => persons.map(person => 
    <Person key={person.name} person={person} />
  )

  return (
    <div>
      <div>debug: {newName}</div>
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