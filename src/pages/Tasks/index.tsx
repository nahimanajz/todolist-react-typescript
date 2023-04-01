import { FC, } from "react";
import { Todo } from "@/models/Todo";
import TodoItem from "../../components/ui/TodoItem";

import {
  useQuery,
} from '@tanstack/react-query'
import { fetchTodo } from "services/todo_service";




export const TasksList: FC = () => {
const {isLoading, error, data} = useQuery<Todo[], Error>({
  queryKey:["todos"],
  queryFn: fetchTodo
})
 
   if(isLoading) return <div>Loading...</div>
   if(error) return <div>{'An Error occurred: ' + error.message}</div>

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {!data.length? (
          <div className="text-red-500">No tasks added yet</div>
        ): null}
      
          {data?.map((todo,index) =><TodoItem todo={todo} key={index}/>)}
          
      </div>
    </>
  );
};
