import React from 'react'

function Card(props) {
    let styles ={
        fontSize: 20, 
        marginLeft: 200,
        marginRight: 200,
        marginBottom: 10,
        borderRadius: 5,
        padding: 5
    }
    
    if (props.timeToGo === 'Spring') {
         styles.backgroundColor ='lightGreen'
        }
    else if (props.timeToGo === 'Winter') {
        styles.backgroundColor ='lightBlue'
       }
    else if (props.timeToGo === 'Fall') {
        styles.backgroundColor ='orange'
       }
    else if (props.timeToGo === 'Summer') {
        styles.backgroundColor ='yellow'
       }

    let dollarSign
       if (props.price < 500) {
           dollarSign = '$'
       }
       else if (props.price < 1000) {
        dollarSign = '$$'
        }
        else if (props.price > 1000) {
            dollarSign = '$$$'
        }
    
    return (
        <div style={styles} >
            <h2>PLACE: {props.place} {dollarSign}</h2>
            <p>Price: {props.price}</p>
            <p>Time To Go: {props.timeToGo}</p>
        </div>
    )
}

export default Card