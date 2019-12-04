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
  const [allClicks, setClicks] = useState(0)

  const handleGoodClick = () => {
  	setGood(good + 1)
  	setClicks(allClicks + 1)
  }

  const handleNeutralClick = () => {
  	setNeutral(neutral + 1)
  	setClicks(allClicks + 1)
  }

  const handleBadClick = () => {
  	setBad(bad + 1)
  	setClicks(allClicks + 1)
  }

  const positiveFeedback = () => good/allClicks * 100 + '%';

  const avgFeedback = () => allClicks/3;


  return (
    <div>
    	<Heading text="give feedback" /> 
	    	<Button onClick={handleGoodClick} text="good" />
	    	<Button onClick={handleNeutralClick} text="neutral" />
	    	<Button onClick={handleBadClick} text="bad" />
    	<Heading text="statistics" /> 
	    	<Result text="good" count={good} /> 
	    	<Result text="neutral" count={neutral}/> 
	    	<Result text="bad" count={bad}/> 
	    	<Result text="all" count={allClicks}/> 
	    	<Result text="average" count={avgFeedback()}/> 
	    	<Result text="positive" count={positiveFeedback()}/> 
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)