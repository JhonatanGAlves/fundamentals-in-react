import React from 'react'

export const IndirectChild = props => {

  return (
    <div>
      <input className="input"
        type="button"
        value="Passar informações"
        onClick={e => {
        props.whenToClick('Jhonatan tem', 25+" anos e é ", true)
      }}/>
    </div>
  )
}