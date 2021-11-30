import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useSelector, useDispatch } from 'react-redux'
import toDoReducer from '../reducer/toDoReducer'

const toDoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    createAction: toDoReducer.create,
    updateAction: toDoReducer.update,
    removeAction: toDoReducer.delete,
  },
})

const { createAction, updateAction, removeAction } = toDoSlice.actions

const store = configureStore({
  reducer: {
    todo: toDoSlice.reducer
  }
})

/**
 * Get ToDo context content from anywhere
 * @returns {object}
 */
export default function useToDoStore() {
  const state = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  const create = (list, description) => dispatch(createAction({ list, description }))
  const update = (id, done) => dispatch(updateAction({ id, done }))
  const remove = (id) => dispatch(removeAction(id))

  return { state, create, update, remove }
}

/**
 * Provide ToDo context to the given subtree
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {React.ReactNode}
 */
export function ToDoStoreProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
