import React from 'react'

const Module = ({courses}) => {
  
  const modules = () => 
    courses.map((course) => {
      return(
        <div>
          <Header name={course.name} />
          <Content key={course.id} parts={course.parts}/>
        </div>
      )
    })

    return(
      <div>
        {modules()}
      </div>
    )
}

const Header = ({name}) => {
  return(
    <h2>{name}</h2>
  )
}

const Content = ({parts}) => {
  const courses = () => 
    parts.map((part) => {
      return(
        <Part key={part.id} part={part}/>
      )
    })

  const totalExcercises = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0) 

  return(
    <div>
      {courses()}
      <b>total of {totalExcercises} exercises</b>
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name}: {part.exercises}</p>
  )
}



export default Module