import React from 'react'

function NavBar() {
    const style1 = {
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 100
    }

    const style2 = {
        paddingRight: '20%',
        paddingLeft: '20%',
        display: 'flex',
        justifyContent: 'space-around',
        listStyle: 'none'
    }

    const style3 = {
        fontSize: 55,
        fontWeight: 850,
        paddingTop: 80
    }
    
    return (
        <div style={style1}>
            <ul style={style2}>
                <li>Home</li>
                <li>About</li>
                <li>Sample</li>
                <li>Contact</li>
            </ul>
            <h1 style={style3}>Clean Blog</h1>
        </div>
    )

}

export default NavBar
