import React from 'react';

const Intention = ({intention, strategy}) => {
  return (
    <div>
      <h2>{intention}</h2>
      <p>{strategy}</p>
    </div>
  )
}

export default Intention;