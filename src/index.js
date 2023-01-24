import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import MyCarts from "./pages/MyCarts";
import AdminPage from "./pages/AdminPage";
import ErrorElement from "./pages/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Product /> },
      { path: "/product", element: <Product /> },
      { path: "/product/:productId", element: <ProductDetail /> },
      { path: "/user", element: <MyCarts /> },
      { path: "/admin", element: <AdminPage /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
