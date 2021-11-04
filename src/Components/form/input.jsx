import React, { useState } from 'react'
import './input.css'

export const Input = (props) => {
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <div>
      <input className="ipt" type="text"
        value={value}
        onChange={handleChange} //Ou pode ser dessa forma {e => setValue(e.target.value)} neste caso, não iria precisar da função criada acima.
        placeholder="Digite aqui..."
      />
      <p>O que for digitado no campo acima, irá aparecer, simultaneamente, abaixo!</p>
      <textarea className="txtArea" readOnly
        value={value}
      >
      </textarea>
    </div>
  )
}