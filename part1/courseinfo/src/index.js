import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)

  const [selectedVote, setSelectedVote] = useState([0, 0, 0, 0, 0, 0])
  const selectedVoteCopy = [...selectedVote]


  const onClick = () => {
  	let ran_num = Math.floor((Math.random() * 6) + 0)
	  setSelected(0 + ran_num)
  }


  const onVote = () => {
    for (var i = 0; i <= 5; i++) {
      if ( selected === i ) {
        selectedVoteCopy[i] = selectedVoteCopy[i] + 1
      }
    }
    setSelectedVote(selectedVoteCopy)

	  setVote(vote + 1)
  }

  let maxVote = Math.max(...selectedVoteCopy)
  let maxVotePosition = selectedVoteCopy.indexOf(maxVote)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {selectedVote[selected]} votes</p>
      <button onClick={onClick}>next anecdote!</button>
      <button onClick={onVote}>vote</button>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[maxVotePosition]}</p>
      <p>has {maxVote} votes</p>
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