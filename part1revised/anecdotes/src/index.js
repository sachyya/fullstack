import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Heading = ({text}) => <h2>{text}</h2>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([0, 0, 0, 0, 0, 0])

  const handleRandomClick = () => setSelected(Math.floor(Math.random() * 6))

  const handleVoteClick = () => {
  	const copy = [...votes]
  	copy[selected] += 1     
  	return setVote(copy)
  }

  const maxVoteIndex = votes.indexOf(Math.max(...votes))
  console.log(maxVoteIndex)

  return (
    <div>
      <Heading text="Anecdote of the day" />
      {props.anecdotes[selected]} 
      <br />
      has {votes[selected]} votes
      <Button text="next Anecdote" onClick={handleRandomClick} />
      <Button text="vote" onClick={handleVoteClick} />
      <Heading text="Anecdote with most votes" />
      {props.anecdotes[maxVoteIndex]} 
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)