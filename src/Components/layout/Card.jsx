import React from 'react'
import './Card.css'

export const Card = (props) => {

    /*Ao declarar a props "color" no component Card onde está sendo chamado, preciso passar a propriedade style dentro da DIV
    e passar meu objeto que recebeu os estilos seguido da props.color*/
    const cardStyle = {
        backgroundColor: props.color || '#353535',
        borderColor: props.color || '#353535'
    }

    return (
        <div className="Card" style={ cardStyle }>
            <div className="Title">{props.title}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}