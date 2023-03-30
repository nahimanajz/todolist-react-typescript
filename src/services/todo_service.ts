import { Todo } from "models/Todo";
import { SERVER_URL } from "utils";

export const fetchTodo =async () => {
  const response = await  fetch(SERVER_URL)
  return response.json() 
 }
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
export const deleteItem = async(id: string) => {
  const response = await fetch(`${SERVER_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json()
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