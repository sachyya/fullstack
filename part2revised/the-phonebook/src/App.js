import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import phoneServices from './services/phone'
import './index.css'

const App = () => {
  const [ persons, setPersons] = useState([]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setFilter] = useState('')
  const [ notification, setNotification] = useState('')
  const [ success, setSuccess] = useState(true)

  useEffect( () => {
    phoneServices.getAll()
      .then(response => {
        setPersons(response)
      })
  }, [] )
 

  const personsToShow = newFilter
  ? persons.filter(person=> person.name.toLowerCase().includes(newFilter.toLowerCase()))
  : persons

  const deletePhone = id => {
    const person = persons.find(p => p.id === id)
    
    if(window.confirm(`You want to delete ${person.name}`)) {
      phoneServices.delPerson(id)
      .catch(error => {
        setNotification(`${person.name} is already deleted!!!`)
        setSuccess(false)
        setTimeout(() => {
          setNotification(null)        
        }, 1000)
      })
      setPersons(persons.filter(p => p.id !== id) )
    }
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const handleInputChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const updatePerson = (personExit) => {
    const personExitId = personExit[0].id 

    // New changed person is created instead of passing the newPerson obj because that will crate a new obj with same name.
    const person = persons.find(p => p.id===personExitId) // Filter the single person obj with the same id
    const changedPerson = { ...person, number: newNumber } // Later change the number value only with same id

    alert(`${newName} is already added to phonebook. Do you want to replace the number?`)
    phoneServices.update(personExitId, changedPerson)
      .then(returnedPerson => {
      setPersons(persons.map(p => p.id !== personExitId ? p : returnedPerson)) //loop through the main obj but replace when the id is same
      setNotification(`${returnedPerson.name} has been updated!!`)
      setSuccess(true)
      setTimeout(() => {
        setNotification(null)        
      }, 1000)
    })
  }

  const createPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber
    }

    phoneServices.create( newPerson )
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
        setNotification(`${newName} has been added!!!`)
        setSuccess(true)
        setTimeout(() => {
          setNotification(null)        
        }, 1000)
      })
      .catch(error => {
          setNotification(error.response.data.error)        
          setSuccess(false)
          console.log(error.response.data.error)
      })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    // Get the person object which is alrady on database. Person obj is crated to get id of the person later while updating.
    const personExit = persons.filter(person => Object.values(person).includes(newName) )

    // It is put in condition because if not two entry with smae name will be create instead of updating.
    if ( personExit.length > 0 ) {
      updatePerson(personExit)
    } else {
      createPerson()
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} success={success} />
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
      <Persons deletePhone={deletePhone} personsToShow={personsToShow}/>
    </div>
  )
}

export default App