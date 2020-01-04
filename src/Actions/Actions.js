export const postIntention = (intention) => ({
  type: 'POST_INTENTION',
  intention: intention.intention,
  strategy: intention.strategy,
  id: intention.id
})