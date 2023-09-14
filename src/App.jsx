import './App.css'
import { Homepage } from './Components/Pages'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { RootErrorPage } from "./Components/Organisms"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <RootErrorPage />,

  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
