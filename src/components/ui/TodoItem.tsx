import { Todo } from "@/models/Todo";
import { SERVER_URL } from "../../utils";
import {
  CheckCircleIcon,
  NoSymbolIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { ReactElement, useId } from "react";
import { EditTodo } from "../form/EditTodo";

const TaskItem = ({ todo, deleteTodo }: { todo: Todo, deleteTodo:Function }): ReactElement => {
  const { id, name, done, text, dueDate, priority } = todo;

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id)
  };

  return (
    <div
      className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      key={useId()}
    >
      <div className="flex justify-between">
        <h1 className="text-slate-500 dark:text-slate-700 font-bold">{name}</h1>

        <h2
          className={`text-${
            priority === `High`
              ? "yellow"
              : priority === `Low`
              ? "red"
              : "green"
          }-500`}
        >
          {priority}
        </h2>
        {done ? (
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
        ) : (
          <NoSymbolIcon className="h-6 w-6 text-red-500" />
        )}
      </div>

      <p className="text-slate-500 dark:text-slate-700 mt-2 text-sm mt-10">
        {text}
      </p>

      <div className="flex justify-between mt-5 text-slate-900 ">
        <h1 className="text-slate-500 dark:text-slate-700 font-italic">
          {dueDate.toString()}
        </h1>
        <span className="flex">
          <EditTodo todo={todo} />
          <TrashIcon
            className="h-6 w-6 text-red-500"
            onClick={() => handleDeleteTodo(id)}
          />
        </span>
      </div>
    </div>
  );
};
export default TaskItem;
