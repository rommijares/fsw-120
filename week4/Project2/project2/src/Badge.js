import React from 'react'

class Badge extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            items: [],
            currentItems: {
                key: '',
                firstName: '',
                lastName: '',
                email: '',
                birthPlace: '',
                phone: '',
                food: '',
                textInfo: ''
            }
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleInput(e){
        this.setState({
            currentItems: {
                key: Date.now(),
                [e.target.name]: e.target.value
            }
        })
    }

    handleClick(e) {
        e.preventDefault()
        const newItem = this.state.currentItems
        if (newItem.currentItems !=='') {
            
        }
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    placeholder='First Name'
                    name= 'firstName'
                    onChange={this.handleInput}
                />
                <input
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    onChange={this.handleInput}
                />
                <br></br>
                <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={this.handleInput}
                />
                <input
                    type='text'
                    placeholder='Place of Birth'
                    name='birthPlace'
                    onChange={this.handleInput}
                />
                <br></br>
                <input
                    type='tel'
                    placeholder='Phone 1234567890'
                    pattern='[0-9]{10}'
                    name='phone'
                    onChange={this.handleInput}
                />
                <input
                    type='text'
                    placeholder='Favorite Food'
                    name='food'
                    onChange={this.handleInput}
                />
                <br></br>
                <input
                    type='text'
                    placeholder='Tell us about yourself'
                    name='textInfo'
                    onChange={this.handleInput}
                />
                <br></br>
                <button onClick={this.handelClick}>Submit</button>
            </form>
        )
    }
}

export default Badge