import React from 'react'

export const DirectChild = props => {

  const ageStatus = props.age >= 18 == true

  return (
    <div>
      <span>{ props.name } </span>
      <span>tem <strong>{ props.age }</strong> anos e é </span>
      <span>{ ageStatus ? 'maior de idade!' : 'menor de idade!' }</span> 
    </div>
  )
}