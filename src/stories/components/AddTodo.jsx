import { Priority } from "models/Todo";
import "../../index.css";

const AddTodo = ({ onClick, dueDate, name, priority, text }) => {
  return (
    <form>
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
              value={name}
              name="name"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <small className=" text-red-700 font-medium"></small>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <input
              name="dueDate"
              defaultValue={dueDate}
              type="date"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <small className=" text-red-700 font-medium"> </small>
          </div>

          <small className=" text-red-700 font-medium"> </small>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="priority"
              autoComplete="priority"
              defaultValue={priority}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <small className=" text-red-700 font-medium"> </small>
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
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            >
              {text}
            </textarea>
            <small className=" text-red-700 font-medium"> </small>
          </div>

          <button
            onClick={onClick}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
