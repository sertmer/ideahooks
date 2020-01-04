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
    default: 
      return state
  }
}