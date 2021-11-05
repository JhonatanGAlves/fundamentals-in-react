import React, { useState } from 'react'

export const Step = props => {

  return (
    <div className="input">
      <label htmlFor="stepInput">In/Decrementar mais: </label>
      <input
        type="number"
        id="stepInput"
        value={props.step}
        onChange={props.initialStep}
      />
    </div>
  )
}