import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const onInputChange = (e) => {
    setNewName(e.target.value)
  }

  const formSubmit = (event) => {
    event.preventDefault()
    const newPersons = {
      name: newName
    }
    setPersons(persons.concat(newPersons))
    setNewName('')
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
          name: <input value={newName} onChange={onInputChange} />
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