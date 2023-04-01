import { Todo } from "models/Todo";
import { SERVER_URL } from "utils";

export const fetchTodo =async () => {
  const response = await  fetch(SERVER_URL)
  return response.json() 
 }

export const createTodo = async <TResponse>(data: Todo): Promise<TResponse> => {
  return await fetch(SERVER_URL, routeConfig("POST", data))
    .then(response => response.json())
    .then(data => data as TResponse).catch(err => err)

}
export const deleteItem = async(id: string) => {
  const response = await fetch(`${SERVER_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json()
}

export const updateTodo = async <TResponse>(todo: Todo): Promise<TResponse> => {
  return await fetch(`${SERVER_URL}/${todo.id}`, routeConfig("PUT", todo))
    .then(response => response.json())
    .then(data => data as TResponse)
    .catch(err => err);

}

const routeConfig = (method: string, data: Todo) => ({
  method: method,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data)
})