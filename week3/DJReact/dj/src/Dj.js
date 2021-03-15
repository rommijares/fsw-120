import React from "react"
import Square from "./Square"
import "./dj.css"


import messageTone from "./sounds/messageTone.mp3"
import morseCode from "./sounds/morseCode.mp3"


class Dj extends React.Component {
    constructor() {
        super()
        this.state = {
            colors1: 'white',
            colors2: 'white',
            colors3: 'white',
            colors4: 'white',
            border: "2px solid black",
            height:  200,
            width: 200,
            
        }
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)
        this.handleClick6 = this.handleClick6.bind(this)
        this.handleClick7 = this.handleClick7.bind(this)
        this.handleClick8 = this.handleClick8.bind(this)
    }

    handleClick1() {
        if (this.state.colors1 === 'white') {
            this.setState( () => {
                return {
                    colors1: 'black',
                    colors2: 'black',
                    colors3: 'black',
                    colors4: 'black'
                }
            })
        } else {
            this.setState( () => {
                return {
                colors1: 'white',
                colors2: 'white',
                colors3: 'white',
                colors4: 'white'
                }
            })
        } 
        
        const sound = new Audio(messageTone)
        sound.play()
    }

    handleClick2() {
        this.setState(() => {
            return {
                colors1: 'purple',
                colors2: 'purple'
            }
        })

        const sound = new Audio(morseCode)
        sound.play()
    }

    

    handleClick3() {
        this.setState( () => {
            return {
                colors3: 'blue'
            }
        })

        const sound = new Audio(messageTone)
        sound.play()
    }

    handleClick4() {
        this.setState( () => {
            return {
                colors4: 'blue'
            }
        })

        const sound = new Audio(morseCode)
        sound.play()
    }

    handleClick5() {
        this.setState( () => {
            return {
                colors4: 'gray'
            }
        })

        const sound = new Audio(messageTone)
        sound.play()
    }

    handleClick6() {
        this.setState( () => {
            return {
                colors4: 'green'
            }
        })

        const sound = new Audio(morseCode)
        sound.play()
    }

    handleClick7() {
        this.setState( () => {
            return {
                colors4: 'red'
            }
        })

        const sound = new Audio(messageTone)
        sound.play()
    }

    handleClick8() {
        this.setState( () => {
            return {
                colors4: 'orange'
            }
        })

        const sound = new Audio(morseCode)
        sound.play()
    }

    render() {
       
        return (
            <div className="style">

                <Square style={{border: this.state.border, height: this.state.height, width: this.state.width,  backgroundColor: this.state.colors1}} />
                <Square style={{border: this.state.border, height: this.state.height, width: this.state.width,  backgroundColor: this.state.colors2}}/>
                <Square style={{border: this.state.border, height: this.state.height, width: this.state.width,  backgroundColor: this.state.colors3}}/>
                <Square style={{border: this.state.border, height: this.state.height, width: this.state.width,  backgroundColor: this.state.colors4}}  />

                <p><button onClick={this.handleClick1}>click 1</button></p>
                <p><button onClick={this.handleClick2}>click 2</button></p>
                <p><button onClick={this.handleClick3}>click 3</button></p>
                <p><button onClick={this.handleClick4}>click 4</button></p>
                <p><button onClick={this.handleClick5}>click 5</button></p>
                <p><button onClick={this.handleClick6}>click 6</button></p>
                <p><button onClick={this.handleClick7}>click 7</button></p>
                <p><button onClick={this.handleClick8}>click 8</button></p>
            </div>
        )
    }

}

export default Dj