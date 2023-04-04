

export interface Todo{
    id:string,
    name: string,
    text: string,
    dueDate: Date,
    priority:Priority,
    done: boolean,
}
export enum  Priority{
  High="High",
  Medium="Medium",
  Low="Low"
}