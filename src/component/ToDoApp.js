import useToDoStore from "../hooks/useToDoStore";
import ToDoForm from "./ToDoForm";
import { ToDoList } from "./ToDoList";

export default function ToDoApp() {
  const { state } = useToDoStore()

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
