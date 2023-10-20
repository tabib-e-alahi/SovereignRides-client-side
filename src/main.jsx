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
import BrandProducts from "./Pages/BrandProducts/BrandProducts";
import CarDetails from "./Pages/BrandProducts/CarDetails";
import MyCart from "./Pages/MyCart/MyCart";
import UpdateProduct from "./Pages/UpdateProduct/UpdateProduct";

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
      {
        path: "/:brand_name",
        element: <PrivetRoute><BrandProducts></BrandProducts></PrivetRoute>,
        loader: () => fetch('http://localhost:5000/car')
      },
      {
        path: "/:brand_name/:id",
        element: <PrivetRoute><CarDetails></CarDetails></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/car/${params.id}`)
      },
      {
        path: "/myCart",
        element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
        loader: () => fetch('http://localhost:5000/carCart')
      },
      {
        path: "/updateProduct/:id",
        element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/car/${params.id}`)
     
      },
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
