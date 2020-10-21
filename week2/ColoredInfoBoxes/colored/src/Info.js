import React from "react";

function Info(props) {
    const styles = {
        backgroundColor: props.text.color,
        marginLeft: 200,
        marginRight: 200,
        marginBottom: 10,
        borderRadius: 5,
        padding: 5
    }
    return (
        <div style={styles}>

            <h2 style={{fontSize: 40}}>{props.text.title}</h2>
            <h4 style={{fontSize: 30}}>Subtitle: {props.text.subtitle}</h4>
            <p style={{fontSize: 20}}>Information: {props.text.information}</p>

        </div>
    )
}

export default Info;