import React from 'react'
import './InputButton.css'

export const InputButton = (props) => {

  const buttonStyle = {
    borderColor: props.color || '#353535',
    color: props.color || '#353535'
  }

  return (
    <div className="Container">
      <a 
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        alt="Botão de acesso"
      >
        <input style={ buttonStyle }
          type="button"
          value={props.value}
        />
      </a>
    </div>
  )
}