import ToDoForm from "./ToDoForm";
import { ToDoList } from "./ToDoList";

export default function ToDoApp() {
  return [
    <h1 className="title is-1">My ToDo Lists</h1>,
    <ToDoForm listNames={['Buy fruits']} />,
    <ToDoList name="Buy fruits" items={[
      { id: 1, description: 'Banana', done: false },
      { id: 2, description: 'Apple', done: true },
      { id: 3, description: 'Orange', done: false },
      { id: 4, description: 'Strawberry', done: false },
    ]} />
  ]
}
