

export interface Todo{
    id:string,
    name: string,
    text: string,
    dueDate: Date,
    priority:"High"| "Medium" | "Low",
    done: boolean,
}