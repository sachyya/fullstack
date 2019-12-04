import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
	if (props.allClicks.length === 0 ) {
		return(
			<div>
				the app is used by pressing buttons
			</div>
		)
	} 

	return (
		<div>
			button press history: {props.allClicks.join(' ')}
		</div>
	)
}


const Display = (props) => <div>{props.value}</div>

const Button = ({onClick, text}) => {
	return (
		<button onClick={onClick} >
			{text}
		</button>
	)
}

const App = (props) => {
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
  	setClicks({...clicks, left: clicks.left + 1})
  	setAll(allClicks.concat('L'))
  }

  const handleRightClick = () => {
  	setClicks( {...clicks, right: clicks.right + 1} )
  	setAll(allClicks.concat('R'))
  }
  console.log('props is',props)
  return (
    <div>
      <div>
        <Display value={clicks.left} />
        <Button onClick={handleLeftClick} text="left" />
        <Button onClick={handleRightClick} text="right" />
        <Display value={clicks.right} />
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
)
