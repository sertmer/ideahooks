export const intentions = (state = [], action) => {
  switch (action.type) {
    case 'POST_INTENTION':
      return action.intentions
    default: 
      return state
  }
}