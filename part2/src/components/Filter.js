import React from 'react'

const Filter = (props) => {
  return(
    <p>filter: <input value={props.value} onChange={props.onChange} /></p>
  )
}

export default Filter