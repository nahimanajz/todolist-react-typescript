import { Priority, Todo } from "models/Todo";

import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { updateTodo } from "services/todo_service";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { DataSchema } from "utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";

interface EditTodoProps {
  todo: Todo;
}

export const EditTodo = ({ todo }: EditTodoProps) => {
  const [showModal, setShowModal] = useState(false);

  const { id, name, done, text, dueDate, priority } = todo;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Todo>({
    resolver: zodResolver(DataSchema),
    defaultValues: { id, name, done, text, dueDate, priority },
  });


  const queryClient = new QueryClient();
  const { mutate: updateTodoItem } = useMutation((todo: Todo) => updateTodo(todo), {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      alert("updated")
    }
  });

  const handleUpdate: SubmitHandler<Todo> = (todo: Todo) => {
    updateTodoItem(todo);
    setShowModal(false);
  };


  return (
    <>
      <PencilSquareIcon
        className="h-6 w-6 text-yellow-500 mr-6"
        onClick={() => {
          setShowModal(true);
          console.log(todo);
        }}
      />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Task</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit(handleUpdate)}>
                  <div className="relative px-12 flex-auto w-96">
                    <div className="space-y-6">
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
                        <small className="text-red-700 font-medium">
                          {errors.name && "Name is required"}
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
                          value={dueDate?.toString()}
                          {...register("dueDate", { required: true })}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <small className=" text-red-700 font-medium">
                          {errors.dueDate?.message}
                        </small>
                      </div>

                      <div className="flex col-span-6 sm:col-span-3">
                        <label
                          htmlFor="done"
                          className="block text-sm font-medium text-gray-700 mr-3"
                        >
                          Done?
                        </label>
                        <div className="flex items-center mb-4">
                          <input
                            id="default-radio-1"
                            type="checkbox"
                            checked={done}
                            defaultValue={`${done}`}
                            {...register("done")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                          />
                          <label
                            htmlFor="default-radio-1"
                            className="ml-2 block text-sm font-medium text-gray-700"
                          >
                            Mark as complete
                          </label>
                        </div>
                      </div>
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
                          {(Object.keys(Priority)).map((key, index) => <option value={key} key={index}> {key} </option>)}

                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Text
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          {...register("text", { required: true })}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                        <small className=" text-red-700 font-medium">
                          {errors.text && "Text is required"}
                        </small>
                      </div>

                    </div>
                  </div>


                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b  border-b border-solid border-slate-200 mt-10">
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
