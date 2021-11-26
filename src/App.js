import ToDoApp from "./component/ToDoApp";
import { ToDoContextProvider } from "./hooks/useToDoContext";

export default function App() {
  return (
    <ToDoContextProvider>
      <ToDoApp />
    </ToDoContextProvider>
  );
}
