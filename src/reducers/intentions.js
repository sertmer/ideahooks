export const intentions = (state = [], action) => {
  switch (action.type) {
    case 'POST_INTENTION':
      return [...state, 
        {
        intention: action.intention,
        strategy: action.strategy,
        id: action.id
        }
      ]
    case 'DELETE_INTENTION':
      const newIntentions =  state.filter(intention => intention.id !== action.intention.id)
      console.log(newIntentions)
    default: 
      return state
  }
}