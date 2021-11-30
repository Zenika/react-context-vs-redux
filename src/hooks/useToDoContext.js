import { createContext, useContext, useReducer } from "react";
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

  const create = (list, description) => dispatch({ type: 'create', payload: { list, description } })
  const update = (id, done) => dispatch({ type: 'update', payload: { id, done } })
  const remove = (id) => dispatch({ type: 'delete', payload: id })

  return (
    <ToDoContext.Provider value={{ state, create, update, remove }}>
      {children}
    </ToDoContext.Provider>
  );
}
