import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/ui/header";
import {AddTask} from "./pages/AddTask";
import { TasksList } from "./pages/Tasks";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TasksList />, 
    },
    {
      path: "/add",
      element: <AddTask />, 
    },
    {
      path: "/detail/:id",
      element: <div>Todo Detail</div>, //** TODO: replace by detail page here*
    },
  ]);
  const navs = [["Home", "/"],["Add", "/add"]];

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/5 bg-blue-600 text-white text-center font-extrabold">
          Productivity Tracker
        </div>
        <div className="w-4/5 flex justify-center">
          <div className="flex flex-col">
            <div className=" h-1/6">
              <nav className="flex sm:justify-center space-x-4">
               {navs.map(([title, url]) => (
                  <a
                    href={url}
                    className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                  >
                    {title}
                  </a>
                ))}
              </nav>
              
            </div>
            <div className=" px-10 py-2">
              <RouterProvider router={router} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
