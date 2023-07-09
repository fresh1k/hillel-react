import React from 'react'

const Button = ({ count, setCount }) => {
  return (
    <div>
      <button className='btn' onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default Button