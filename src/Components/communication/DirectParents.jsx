import React from 'react'
import { DirectChild } from './DirectChild'

export const DirectParents = props => {
  return (
    <div>
      <DirectChild name="Jhonatan" age={25} />
      <DirectChild name="Chaiene" age={23} />
      <DirectChild name="Buck" age={2} />
    </div>
  )
}