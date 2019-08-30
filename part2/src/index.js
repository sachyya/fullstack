import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) => {
  return(
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
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

  const exercises = () => 
    parts.map((part) => {
      return(
        part.exercises   
      )
    })


  let total = 0
  exercises().forEach(value => {
    total += value;
  })    

  return(
    <div>
      {courses()}
      <b>total of {total} exercises</b>
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name}: {part.exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
