import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({text}) => <div><h2>{text}</h2></div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistic = ({count, text}) => {
	return (
      <tr>
        <td>{text}</td>
        <td>{count}</td>
      </tr>
     
  )
}

const Statistics = ({clicks}) => {
  console.log(clicks)
  return(
    <table>
    <tbody>
      <Statistic text="good" count={clicks.good} /> 
      <Statistic text="neutral" count={clicks.neutral}/> 
      <Statistic text="bad" count={clicks.bad}/> 
      <Statistic text="all" count={clicks.allClicks}/> 
      <Statistic text="average" count={clicks.avg}/> 
      <Statistic text="positive" count={clicks.positive}/> 
     </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [clicks, setClick] = useState({good: 0, neutral: 0, bad:0, allClicks:0, avg: 0, positive: 0 })
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
  // const [allClicks, setClicks] = useState(0)

  const handleGoodClick = () => setClick({ 
    ...clicks, 
    good: clicks.good + 1, 
    allClicks: clicks.allClicks + 1, 
    positive: clicks.good / clicks.allClicks * 100 + '%',
    avg: clicks.allClicks/3
  })

  const handleNeutralClick = () => setClick({ 
    ...clicks, 
    neutral: clicks.neutral + 1, 
    allClicks: clicks.allClicks + 1,
    avg: clicks.allClicks/3
  })

  const handleBadClick = () => setClick({ 
    ...clicks, 
    bad: clicks.bad + 1, 
    allClicks: clicks.allClicks + 1,
    avg: clicks.allClicks/3
  })

  return (
    <div>
    	<Heading text="give feedback" /> 
	    	<Button onClick={handleGoodClick} text="good" />
	    	<Button onClick={handleNeutralClick} text="neutral" />
	    	<Button onClick={handleBadClick} text="bad" />
    	<Heading text="statistics" /> 
	    <Statistics clicks={clicks} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)