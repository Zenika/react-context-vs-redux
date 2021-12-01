import { createContext, useContext, useReducer, useMemo } from "react";
import toDoReducer from '../reducer/toDoReducer'
import useToDoAction from "./useToDoAction";

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
  const { create, update, remove } = useToDoAction(dispatch)

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
