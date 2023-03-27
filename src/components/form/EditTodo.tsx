import { Todo } from "@/models/Todo";
import { SERVER_URL } from "../../utils";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface EditTodoProps {
  todo: Todo;
}
//{ todo }: { todo: Todo }

export const EditTodo = ({ todo }: EditTodoProps) => {
  const [showModal, setShowModal] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo);
  const[loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate()

  const setTaskField = (e: {
    target: { name: string; value: string | number | boolean };
  }) => {
    setUpdatedTodo({ ...updatedTodo, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setShowModal(false);
      setLoading(true);

      try {
        const response = await fetch(`${SERVER_URL}/${todo.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTodo),
        });
        if (!response.ok) {
          throw new Error(`HTTP error${response.status}`);
        }
        setLoading(false);
        navigate("/");
      } catch (err) {
        console.log(err)
        setLoading(false);
      }
  };
  useEffect(() => {
    // setUpdatedTodo(todo)
  }, [updatedTodo]);

  const { id, name, done, text, dueDate, priority } = updatedTodo;
  return (
    <>
      <PencilSquareIcon
        className="h-6 w-6 text-yellow-500 mr-6"
        onClick={() => setShowModal(true)}
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
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
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
                        name="name"
                        value={name}
                        onChange={setTaskField}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
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
                        name="dueDate"
                        value={dueDate.toString()}
                        onChange={setTaskField}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex col-span-6 sm:col-span-3">
                      <label
                        htmlFor="done"
                        className="block text-sm font-medium text-gray-700 mr-3"
                      >
                        Done
                      </label>
                      <div className="flex items-center mb-4">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value={`${done}`}
                          name="done"
                          onChange={setTaskField}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-2 block text-sm font-medium text-gray-700"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center ml-3 mb-3">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value={`${done}`}
                          onChange={setTaskField}
                          name="done"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ml-2 block text-sm font-medium text-gray-700"
                        >
                          Not Yet
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
                        name="priority"
                        onChange={setTaskField}
                        value={`${priority}`}
                        autoComplete="priority"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>High</option>
                        <option>Normal</option>
                        <option>Low</option>
                      </select>
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
                        value={text}
                        onChange={setTaskField}
                        name="text"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/*footer*/}

                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleUpdate}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
