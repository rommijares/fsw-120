import React from 'react'
import Die from './Die'

class DiceBox extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        
        this.setState(() => {
            return {
                num1: Math.floor(Math.random()* 6 + 1) ,
                num2: Math.floor(Math.random()* 6 + 1),
                num3: Math.floor(Math.random()* 6 + 1),
                num4: Math.floor(Math.random()* 6 + 1),
                num5: Math.floor(Math.random()* 6 + 1)
            }
        })

        this.setState( prevState => {
            return {
                count: prevState.count + 1
            }
        })

        if (this.state.count === 3) {
            this.setState( () => {
                return {
                    num1: 0,
                    num2: 0,
                    num3: 0,
                    num4: 0,
                    num5: 0,
                    count: 0
                }
            })
        }
        
    }

    handleClick2() {
        console.log('hello')
        
    }
    render() {
        return (
            <div>
                <h2>{this.state.num1} {this.state.num2} {this.state.num3} {this.state.num4} {this.state.num5} </h2>
                <button onClick={this.handleClick}>Click Me</button>
                
                <Die number = {this.state.num1}  onClick={this.handleClick2}/>
                
            </div>
        )
    }

}

export default DiceBox