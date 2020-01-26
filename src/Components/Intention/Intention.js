import React from 'react';
import { connect } from 'react-redux'
import {deleteIntention} from '../../Actions/Actions'

const Intention = ({intention, strategy, id, deleteIntention}) => {
  return (
    <div key={id} id={id}>
      <h2>{intention}</h2>
      <p>{strategy}</p>
      <button onClick={() => deleteIntention({intention, strategy, id})}>delete</button>
    </div>
  )
}

export const mapDispatch = dispatch => ({
  deleteIntention: (intention) => dispatch(deleteIntention(intention))
})

export default connect(null, mapDispatch)(Intention);