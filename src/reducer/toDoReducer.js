function createID(list) {
  return list.reduce((id, item) => Math.max(id, item.id), 0) + 1
}

export default function toDoReducer(state, action) {
  return toDoReducer[action?.type]?.(state, action) || state
}

toDoReducer.create = (state, action) => {
  return [ ...state, { ...action.payload, id: action.payload.id || createID(state) }]
}

toDoReducer.populate = (state, action) => {
  return [...action.payload]
}

toDoReducer.update = (state, action) => {
  return state.map((item) => (
    (item.id !== action.payload.id) && item) || { ...item, ...action.payload }
  )
}

toDoReducer.delete = (state, action) => {
  return state.filter((item) => item.id !== action.payload)
}
