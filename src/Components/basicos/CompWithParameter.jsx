import React from 'react'

export const CompWithParameter = (props) => {
    return (
        <div>
            <h1>{ props.title }</h1>
            <p><strong>{ props.name }</strong> ficou com a média <strong>{ props.media }</strong> e está <strong>{ props.result }!</strong></p>
        </div>
    )
}