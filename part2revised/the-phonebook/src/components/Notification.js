import React from 'react'

const Notification = ({ success, message }) => {
  if (message === null) {
    return null
  }

  const msgClass = success ? 'success' : 'error'

  return (
    <div className={msgClass}>
      {message}
    </div>

  )
}

export default Notification