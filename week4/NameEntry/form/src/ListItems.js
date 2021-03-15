import React from 'react'

function ListItems(props) {
    const items = props.items
    const listItems = items.map(item => {
        return (
            <li key={item.key}>{item.text}
            </li>
        )
    })
    return(
        <span>{listItems}</span>
    )
}

export default ListItems