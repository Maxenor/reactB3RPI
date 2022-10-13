import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import CardSearch from "./Components/cardsearch/CardSearch";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/cardsearch",
    element: <CardSearch />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);