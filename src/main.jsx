import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import AddProduct from "./Pages/AddProduct/AddProduct";
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";
// import BrandProducts from "./Pages/BrandProducts/BrandProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProduct",
        element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>,
      },
      // {
      //   path: "/:brand",
      //   element: <PrivetRoute><BrandProducts></BrandProducts></PrivetRoute>,
      //   loader: ({params}) => fetch(`http://localhost:5000/brands/${params.brand}`)
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
