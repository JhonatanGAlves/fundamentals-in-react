import React from 'react'
import './Card.css'

export const Card = (props) => {
    return (
        <div className="Card">
            <div className="Title">{props.title}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}