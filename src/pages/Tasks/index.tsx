import { FC, ReactElement, useEffect, useId, useState } from "react";
import { Todo } from "@/models/Todo";
import { SERVER_URL } from "../../utils"; // TODO: replace with absolute path
import TodoItem from "../../components/ui/TodoItem";

export const TasksList: FC = (): ReactElement => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    try {
      const response = await fetch(SERVER_URL);
      if (!response.ok) {
        throw new Error(`HTTP error${response.status}`);
      }
      const data = await response.json();
      setTodos(data);
      setLoading(false);
    } catch (err) {
      setError(`${err}`);
      console.log(err);
      setLoading(false);
    }
  };
  const deleteTodo=async(id: string) => {
    try {
      const response = await fetch(`${SERVER_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error${response.status}`);
      }
  
    } catch (err) {
      console.log("something went wrong", err);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [loading, error]);


  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {!todos.length && (
          <div className="text-red-500">No tasks added yet</div>
        )}
        {error ? (
          <div className="text-red-500">Something went wrong</div>
        ) : (
          todos &&
          todos.map((todo) =><TodoItem todo={todo} deleteTodo={deleteTodo}/>)
        )}
      </div>
    </>
  );
};
