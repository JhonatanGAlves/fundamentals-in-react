import React, { useState } from 'react'
import cr7 from '../../Images/cr7.jpeg'
import messi10 from '../../Images/messi10.png'
import { InputButton } from '../InputButton/InputButton'

export const EvenOrOdd = (props) => {
  const [number, setNumber] = useState(null)

  const isEven = number % 2 === 0
  const cristianoRonaldo = number == 7
  const messi = number == 10

  return (
    <div>
      <div className="btn">
        <input type="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          placeholder="Digite um número"
        />
      </div>
      
      <h2 hidden={ number == null } >O número <strong>{ number }</strong> é { isEven ?
        <span>PAR</span> :
        <span>ÍMPAR</span> }!
      </h2>
      <div className="players">{ cristianoRonaldo &&
        <span>Este número é fortemente ligado ao jogador de futebol <strong>Cristiano Ronaldo!</strong><br/>
          Por este motivo, usa a sigla <strong><i>CR7</i></strong> como sua marca.
          <img src={cr7} />
        </span> }
      </div>
      <div className="players">{ messi &&
        <span>Este número é fortemente ligado ao jogador de futebol <strong>Lionel Messi!</strong>
          <img src={messi10} />
        </span> }
      </div>
    </div>
  )
}