import { Todo } from "@/models/Todo";
import { CheckCircleIcon, NoSymbolIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";

 const TaskItem =( {todo}: {todo:Todo}): ReactElement => {
  const { id, name, done, text, dueDate, priority } = todo

  return (
    (
        <div
          className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
          key={id}
        >
          <div className="flex justify-between">
            <h1 className="text-slate-500 dark:text-slate-700 font-bold">
              {name}
            </h1>

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
            <PencilSquareIcon className="h-6 w-6 text-black-900" />
          </div>
        </div>
      )
  );
}
export default TaskItem;