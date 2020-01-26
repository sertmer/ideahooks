import React, {useState} from 'react';
import './Form.css';
import  { connect } from 'react-redux';
import { postIntention } from '../../Actions/Actions'

const Form = ({postIntention}) => {
  const [intention, setIntention] = useState('')
  const [strategy, setStrategy] = useState('')

  const handleChange = (e) => {
    if (e.target.name === 'intention') {
      setIntention(e.target.value)
    } else {
      setStrategy(e.target.value)
    }
  }

  const handleClick = () => {
    setIntention('')
    setStrategy('')
    postIntention({intention, strategy})
  }
  
  return (
    <nav>
      <label>Intention: </label>
      <input type='text' 
        name='intention' 
        value={intention} 
        onChange={(e) => handleChange(e)}
      /> 
      <label>Strategy: </label>
      <input type='text' 
        name='strategy' 
        value={strategy} 
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}>submit</button>
    </nav>
  )
}

export const mapDispatch = dispatch => ({
  postIntention: (intention) => dispatch(postIntention(intention))
})

export default connect(null, mapDispatch)(Form);
