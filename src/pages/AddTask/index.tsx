import { Priority, Todo } from "models/Todo";
import { FC, ReactElement} from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { createTodo } from "services/todo_service";


const DataSchema = z.object({
  id: z.string(),
  name: z.string().min(3, {message: "Name is required"}),
  dueDate: z.coerce.date(),
  priority: z.enum(["Low", "Medium", "High"]),
  text: z.string().min(10, { message: "Please enter at least 5 characters" }).max(300, { message: "Characters exceed 300" }).optional()
})

export const AddTask: FC = (): ReactElement => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Todo>({
    resolver: zodResolver(DataSchema),
    defaultValues: {
      id: uuidv4(),
      name: "",
      priority: Priority.Low,
      dueDate: new Date(),
      done: false,
      text: ""
    }
  });


  const onSubmit: SubmitHandler<Todo> = (data: Todo) => {
    try {
      createTodo(data)
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow hover:shadow-md w-96 py-6 px-10">
        <div className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 text-blue-700">
            New Task Detail
          </h5>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              {...register("name", { required: true })}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <small className=" text-red-700 font-medium">
              {" "}
              {errors.name?.message }
            </small>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <input
              type="date"
              {...register("dueDate", { required: true })}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <small className=" text-red-700 font-medium">
              {" "}
              {errors.dueDate?.message }
            </small>
          </div>
          
          <small className=" text-red-700 font-medium">
            {" "}
            {errors.done?.message}
          </small>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="priority"
              {...register("priority", { required: true })}
              autoComplete="priority"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
             {(Object.keys(Priority)).map( (key, index) => <option value={key} key={index}> {key} </option> )}
            </select>
            <small className=" text-red-700 font-medium">
              {" "}
              {errors.priority?.message}
            </small>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              text
            </label>
            <textarea
              id="message"
              rows={4}
              {...register("text", { required: true })}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
            <small className=" text-red-700 font-medium">
              {" "}
              {errors.text?.message}
            </small>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Todo
          </button>
        </div>
      </div>
    </form>
  );
};
