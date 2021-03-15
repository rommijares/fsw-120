import React from 'react'

function Die(props)  {
    return (
        <div>
            <h1 onClick={props.onClick}>{props.number} </h1>
        </div>
        )
    }

export default Die