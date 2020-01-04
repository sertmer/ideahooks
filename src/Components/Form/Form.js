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
        /> 
        <label>Strategy: </label>
        <input type='text' 
          name='strategy' 
          value={this.state.strategy} 
        />
      </nav>
    )
  }
}

export default Form;