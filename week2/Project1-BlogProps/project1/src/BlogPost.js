import React from 'react'

function BlogPost(props) {
    const style1 = {
        borderBottom: '2px solid lightGray',
        marginLeft: '35%',
        marginRight: '35%',
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'left',
        lineHeight: 1.0
    }
    return (
        <div style={style1}>
            <h2 style={{fontSize: 30, fontWeight: 800}}>{props.title}</h2>
            <p style={{fontSize: 20}}>{props.subTitle}</p>
            <p>Posted by {props.author} on {props.date}</p>
        </div>
    )
}

export default BlogPost