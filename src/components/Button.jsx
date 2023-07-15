import React from 'react'

const Button = ({count, handleIncreaseNumber, handleDecreaseNumber }) => {
  return (
    <div>
      <button className='btn' onClick={handleIncreaseNumber}>Increase</button>
      <span>{ count }</span>
      <button className='btn' onClick={handleDecreaseNumber}>Decrease</button>
    </div>
  )
}

export default Button