import React from 'react'

export const Buttons = props => {

  return (
    <div className="btn">
      <button className="btn1" onClick={props.decrement}>-</button>
      <button className="btn2" onClick={props.increment}>+</button> 
    </div>
  )
}