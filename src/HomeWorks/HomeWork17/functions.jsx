
export const addNumber = (dispatch, randomNumber) => {
  dispatch({ type: 'ADD', payload: randomNumber })
}

export const shuffle = (dispatch) => {
  dispatch({ type: 'SHUFFLE' })
}

export const remove = (dispatch) => {
  dispatch({ type: 'REMOVE' })
}

export const update = (dispatch) => {
  dispatch({ type: 'UPDATE' })
}

export const setAge = (dispatch) => {
  dispatch({ type: 'AGE' })
}