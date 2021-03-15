import logo from './logo.svg';
import './App.css';
import React from 'react'
import ListItems from './ListItems'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  handleClick(e) {
    e.preventDefault()
    const newItem = this.state.currentItem
    
    if (newItem.text !=='') {
      const newItems=[...this.state.items, newItem]
      this.setState({
        items:newItems,
        currentItem:{
          text: '',
          key: ''
        }
      })
    }
  }

  render() {
    return (
      <div>
        <form>

          <input 
            type='text' 
            placeholder='Name'
            value={this.state.currentItem.text}
            onChange = {this.handleChange}  
          />

          <button onClick={this.handleClick}>Click</button>

          <h1>{this.state.currentItem.text}</h1>

        </form>

        <ol>
          <ListItems items={this.state.items}/>
        </ol>
        
      </div>
    )
  }
}

export default App;
