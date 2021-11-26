import { createContext, useContext, useReducer, useMemo, useCallback } from "react";
import toDoReducer from '../reducer/toDoReducer'

const ToDoContext = createContext({})

/**
 * Get ToDo context content from anywhere
 * @returns {object}
 */
export default function useToDoContext() {
  return useContext(ToDoContext)
}

/**
 * Provide ToDo context to the given subtree
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {React.ReactNode}
 */
export function ToDoContextProvider({ children }) {
  const [state, dispatch] = useReducer(toDoReducer, [])

  const create = useCallback(
    (list, description) => dispatch({ type: 'create', payload: { list, description } }),
    [dispatch]
  )

  const update = useCallback(
    (id, done) => dispatch({ type: 'update', payload: { id, done } }),
    [dispatch]
  )

  const remove = useCallback(
    (id) => dispatch({ type: 'delete', payload: id }),
    [dispatch]
  )

  const ctx = useMemo(
    () => ({ state, create, update, remove }),
    [state, create, update, remove]
  )

  return (
    <ToDoContext.Provider value={ctx}>
      {children}
    </ToDoContext.Provider>
  );
}
