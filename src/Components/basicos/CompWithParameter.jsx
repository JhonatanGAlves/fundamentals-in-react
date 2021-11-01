import React from 'react'

export const CompWithParameter = (props) => {
    return (
        <div>
            <h1>{ props.title }</h1>
            <p><strong>{ props.name }</strong> tem nota <strong>{ props.nota }</strong> e está <strong>{ props.aprovado }!</strong></p>
        </div>
    )
}