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
import About from "./Pages/About/About";

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
        path: "/about",
        element: <About></About>,
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
        loader: () => fetch('https://brand-shop-server-side-assignment-10-qwerci4rz-tabib-e-alahi.vercel.app/car')
      },
      {
        path: "/:brand_name/:id",
        element: <PrivetRoute><CarDetails></CarDetails></PrivetRoute>,
        loader: ({params}) => fetch(`https://brand-shop-server-side-assignment-10-qwerci4rz-tabib-e-alahi.vercel.app/car/${params.id}`)
      },
      {
        path: "/myCart",
        element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
        loader: () => fetch('https://brand-shop-server-side-assignment-10-qwerci4rz-tabib-e-alahi.vercel.app/carCart')
      },
      {
        path: "/updateProduct/:id",
        element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>,
        loader: ({params}) => fetch(`https://brand-shop-server-side-assignment-10-qwerci4rz-tabib-e-alahi.vercel.app/car/${params.id}`)
     
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
