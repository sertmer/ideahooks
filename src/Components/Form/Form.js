import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      intention: '',
      strategy: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  render() {
    return (
      <nav>
        <label>Intention: </label>
        <input type='text' 
          name='intention' 
          value={this.state.intention} 
          onChange={(e) => this.handleChange(e)}
        /> 
        <label>Strategy: </label>
        <input type='text' 
          name='strategy' 
          value={this.state.strategy} 
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={}>submit</button>
      </nav>
    )
  }
}

export default Form;