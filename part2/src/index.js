import React from 'react'
import ReactDOM from 'react-dom'

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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Module courses={courses} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)