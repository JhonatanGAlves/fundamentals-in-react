import React from 'react'
import { DirectChild } from './DirectChild'

export const DirectParents = props => {
  return (
    <div>
      <h3>Passando informações de componente <strong>pai</strong> para <strong>filho</strong> usando <i>props</i></h3>
      <hr />
      <div>
        <DirectChild name="Jhonatan" age={25} />
        <DirectChild name="Chaiene" age={23} />
        <DirectChild name="Buck" age={2} />
      </div>
    </div>
  )
}