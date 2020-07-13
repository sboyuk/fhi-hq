export const setSchedule = schedule => ({
  type: 'SET_SCHEDULE',
  payload: schedule
});

export const addToDockedLoads = orders => ({
  type: 'ADD_TO_DOCKED_LOADS',
  payload: orders
})