import React from 'react'
import imgFragment from '../../Images/img-fragment.png'

export const UsingFragment = () => {
    return (
        <>
            <h1>Fragmento</h1>
            <p>Cuidado com esse erro. Nunca retorne uma tag sem referenciar o pai, pode ser com uma DIV, ou no caso, <strong>"fragment"</strong></p>
            <img src={ imgFragment } alt="Imagem exibindo um exemplo de fragmento" />
        </>
    )
}