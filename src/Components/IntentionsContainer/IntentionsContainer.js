import React from 'react'
import { connect } from 'react-redux'
import Intention from '../Intention/Intention'

const IntentionsContainer = ({intentions}) => {
  const allIntentions = intentions.map(intention => {
    return (<Intention 
      key={intention.id}
      intention={intention.intention}
      strategy={intention.strategy}
      id={intention.id}
    />)
  })

  return (
    <main>
      {allIntentions}
    </main>
  )
}

export const mapState = state => ({
  intentions: state.intentions
})

export default connect(mapState)(IntentionsContainer)