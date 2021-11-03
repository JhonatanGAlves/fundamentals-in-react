import React from 'react'
import cr7 from '../../Images/cr7.jpeg'

export const EvenOrOdd = (props) => {

  const isEven = props.number % 2 === 0
  const cristianoRonaldo = props.number === 7
  const messi = props.number === 10

  return (
    <div>
      <h2>O número <strong>{props.number}</strong> é { isEven ?
        <span>PAR</span> :
        <span>ÍMPAR</span> }!
      </h2>
      <div className="cr7">{ cristianoRonaldo &&
        <span>Este número é fortemente ligado ao jogador de futebol <strong>Cristiano Ronaldo!</strong><br/>
          Por este motivo, usa a sigla <strong><i>CR7</i></strong> como sua marca.
          <img src={cr7} />
        </span> }
      </div>
      <p>{ messi &&
        <span>Este número é fortemente ligado ao jogador de futebol <strong>Lionel Messi!</strong></span> }
      </p>
    </div>
  )
}