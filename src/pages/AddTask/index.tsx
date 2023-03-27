import { Todo } from "@/models/Todo";
import { SERVER_URL } from "../../utils";
import { FC, ReactElement, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const AddTask: FC = (): ReactElement => {

  const [todo, setTodo] = useState({ });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const setTaskField = (e: {
    target: { name: string; value: string | number | boolean };
  }) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    setLoading(true);
    
    

    try {
      const response = await fetch(SERVER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      if (!response.ok) {
        setError("something went wrong");
        throw new Error(`HTTP error${response.status}`);
      }
      setLoading(false);
      navigate("/")
    } catch (err) {
      setError(`${err}`);
      setLoading(false);
    }
  };
  return (
    <>
      {error ? (
        <div className="texgt-lg text-red-500"> {error}</div>
      ) : (
        loading && (
          <div className="texgt-lg text-green-500"> Please wait ...</div>
        )
      )}
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
              name="name"
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
                value="1"
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
                value="0"
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
              onChange={setTaskField}
              name="text"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Todo
          </button>
        </div>
      </div>
    </>
  );
};
