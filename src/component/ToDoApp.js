import useToDoContext from "../hooks/useToDoContext";
import ToDoForm from "./ToDoForm";
import { ToDoList } from "./ToDoList";

export default function ToDoApp() {
  const { state } = useToDoContext()

  const groups = state.reduce((obj, item) => ({
    ...obj,
    [item.list]: [...(obj[item.list] || []), item]
  }), {})

  return (
    <>
      <h1 className="title is-1">My ToDo Lists</h1>
      <ToDoForm listNames={Object.keys(groups)} />
      {
        Object
          .entries(groups)
          .sort()
          .map(([name, items]) => <ToDoList key={name} {...{ name, items }} />)
      }
    </>
  )
}
