import React, { Component } from 'react';
import './Form.css';
import  { connect } from 'react-redux';
import { postIntention } from '../../Actions/Actions'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      intention: '',
      strategy: '',
      id: Date.now()
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
        <button onClick={() => this.props.postIntention(this.state)}>submit</button>
      </nav>
    )
  }
}

export const mapDispatch = dispatch => ({
  postIntention: intention => dispatch(postIntention(intention))
})

export default connect(null, mapDispatch)(Form);