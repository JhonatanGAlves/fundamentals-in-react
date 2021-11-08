import React, { useState } from 'react'

export const Mega = props => {

  function generateNoContainedNumber(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(random) ?
    generateNoContainedNumber(min, max, array) :
    random
  }

  function generateNumbers(quantities) {
    const numbers = Array(quantities)
      .fill(0)
      .reduce((nums) => {
        const newNumber = generateNoContainedNumber(1, 60, nums)
        return [ ...nums, newNumber ]
      }, [])
      .sort((n1, n2) => n1 - n2)
    
    return numbers
  }

  const [qtts, setQtts] = useState(props.quantities || 6)
  const initialNumbers = generateNumbers(qtts)
  const [nRandoms, setNRandoms] = useState(initialNumbers)

  return (
    <div>
      <h2>Números da Mega-Sena</h2>
      <h3>{ nRandoms.join(' ') }</h3>
      <div className="qttsNumbers">
        <label>Quantidade de números: </label>
        <input
          type="number"
          value={ qtts }
          onChange={e => setQtts(+e.target.value)}
        />
      </div>
      <button
        onClick={_ => setNRandoms(generateNumbers(qtts))}>
        Gerar números
      </button>
    </div>
  )
}