import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login"


const App = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ]);


      

    return <RouterProvider router={router} />
}

export default App