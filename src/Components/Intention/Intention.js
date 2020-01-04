import React from 'react';

const Intention = ({intention, strategy, id}) => {
  return (
    <div key={id} id={id}>
      <h2>{intention}</h2>
      <p>{strategy}</p>
    </div>
  )
}

export default Intention;