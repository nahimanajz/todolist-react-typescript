import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/ui/header";


function App() {



  const router = createBrowserRouter([
    {
      path:"/",
      element:<div>Onboarding screen</div> // TODO: replace by list of todo page here*
    },
    {
      path:"/add",
      element:<div>New Todo</div> //** TODO: add new todo form page here*
    },
    {
      path:"/detail/:id",
      element:<div>Todo Detail</div> //** TODO: replace by detail page here*
    }
  ])
  
  return (
    <>
      <div> Just app </div>{/** add menus here */}
      <RouterProvider router={router} />
    </>

  );
}

export default App;
