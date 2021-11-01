import React from 'react'

export const RandomNumber = (props) => {
  const { min, max } = props
  const random = Math.floor(Math.random() * (max - min)) + min

  return (
    <div>
      <h2>{ props.title }</h2>
      <p><strong>Valor mínimo: </strong> { min }</p>
      <p><strong>Valor máximo: </strong> { max }</p>
      <p><strong>Valor escolhido entre {min} e {max} é: </strong> { random }</p>
    </div>
  )
}