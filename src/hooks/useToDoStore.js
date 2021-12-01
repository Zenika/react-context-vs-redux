import { useCallback, useMemo, useEffect } from 'react'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider, useSelector, useDispatch } from 'react-redux'
import logger from '../middleware/logger'
import toDoSlice, {
  populateActionAsync,
  createActionAsync,
  updateActionAsync,
  removeActionAsync
} from '../slice/toDoSlice'

const store = configureStore({
  reducer: {
    todo: toDoSlice.reducer
  },
  middleware: [
    ...getDefaultMiddleware(),
    logger
  ]
})

/**
 * Get ToDo context content from anywhere
 * @returns {object}
 */
export default function useToDoStore() {
  const state = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(populateActionAsync())
  }, [dispatch])

  const create = useCallback(
    (list, description) => dispatch(createActionAsync({ list, description })),
    [dispatch]
  )

  const update = useCallback(
    (id, done) => dispatch(updateActionAsync({ id, done })),
    [dispatch]
  )

  const remove = useCallback(
    (id) => dispatch(removeActionAsync(id)),
    [dispatch]
  )

  return useMemo(
    () => ({ state, create, update, remove }),
    [state, create, update, remove]
  )
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
