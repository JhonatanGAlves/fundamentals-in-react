import React, { useState } from 'react'

export const Display = props => {

  return (
    <div className="counter">
        <h2>Contador</h2>
        <h2><strong>{props.number}</strong></h2>
    </div>
  )
}