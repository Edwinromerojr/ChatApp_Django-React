import React from 'react'

const Message = ({text, sent}) => {
  return (
    <div className={`message ${sent ? 'sent':'recieved'}`}>
        <div className='message-bubble'>{text}</div>
    </div>
  )
}

export default Message