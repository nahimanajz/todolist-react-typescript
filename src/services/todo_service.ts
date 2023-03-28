import { Todo } from "models/Todo";
import { SERVER_URL } from "utils";

export const createTodo = async (data: Todo) => {
    const response = await fetch(SERVER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`HTTP error${response.status}`);
    }
}

export const updateTodo = async (todo: Todo)=>{
    const response = await fetch(`${SERVER_URL}/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      if (!response.ok) {
        throw new Error(`HTTP error${response.status}`);
      }
}