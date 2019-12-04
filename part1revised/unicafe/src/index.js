import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({text}) => <div><h2>{text}</h2></div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


const Result = ({count, text}) => <p>{text} : {count}</p> 

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    	<Heading text="give feedback" /> 
	    	<Button onClick={() => setGood(good + 1)} text="good" />
	    	<Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
	    	<Button onClick={() => setBad(bad + 1)} text="bad" />
    	<Heading text="statistics" /> 
	    	<Result text="good" count={good} /> 
	    	<Result text="neutral" count={neutral}/> 
	    	<Result text="bad" count={bad}/> 
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)