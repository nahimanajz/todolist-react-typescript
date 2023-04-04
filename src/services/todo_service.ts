import { Todo } from "models/Todo";

const {REACT_APP_SERVER_URL: SERVER_URL} = process.env


export const fetchTodo = async <TResponse>(): Promise<TResponse> => {
  return await fetch(`${SERVER_URL}`).then(response => response.json())
    .then(data => data as TResponse)
    .catch(err => err);

}

export const createTodo = async <TResponse>(data: Todo): Promise<TResponse> => {
  return await fetch(`${SERVER_URL}`, routeConfig("POST", data))
    .then(response => response.json())
    .then(data => data as TResponse).catch(err => err)

}
export const deleteItem = async<TResponse>(id: string): Promise<TResponse> => {
  return await fetch(`${SERVER_URL}/${id}`, {
    method: "DELETE",
  }).then(response => response.json())
    .then(data => data as TResponse)
    .catch(err => err);
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