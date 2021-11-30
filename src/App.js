import ToDoApp from "./component/ToDoApp";
import { ToDoStoreProvider } from "./hooks/useToDoStore";

export default function App() {
  return (
    <ToDoStoreProvider>
      <ToDoApp />
    </ToDoStoreProvider>
  )
}
