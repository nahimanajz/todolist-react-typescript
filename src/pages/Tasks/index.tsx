import { FC, ReactElement, useEffect, useState } from "react";
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
          todos.map((todo) =><TodoItem todo={todo}/>)
        )}
      </div>
    </>
  );
};
