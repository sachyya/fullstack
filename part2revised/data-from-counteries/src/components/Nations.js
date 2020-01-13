import React, {useState} from 'react'
import Nation from './Nation'

const Nations = ({nations}) => {
	const [ state, setState] = useState(false)

	// const onClickBtn = (nation) => {
	// 	setState(!state)
	// }
	return (
			nations.map( (nation, i) => {
		    return (
		    	<div key={i} >
			        <p key={i}>{nation.name}</p>
			        <button key={i + 'btn'} onClick={() => setState(!state)}>{state ? 'hide' : 'show'}</button>
			       	{ state && <Nation key={i+'nation'} nation={nation} />}
		      	</div>
		    )
	    })
	)
}

export default Nations