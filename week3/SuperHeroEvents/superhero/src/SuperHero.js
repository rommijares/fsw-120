import React from 'react'

function SuperHero(props) {

    function message() {
        alert(props.catchPhrase)
    }
    return (
        <div>
            <h2 onClick={message}>Name: {props.name}</h2>
            <p>Show: {props.show}</p>
            <img onClick={message} src= {props.imageName}/>
        </div>
    )
}

export default SuperHero