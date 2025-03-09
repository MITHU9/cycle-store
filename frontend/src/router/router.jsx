import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import MainLayout from "../layout/MainLayout";
import AddProduct from "../pages/Admin/Pages/AddProduct";
import ManageProduct from "../pages/Admin/Pages/ManageProduct";
import OverView from "../pages/Admin/Shared/Overview";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/login/Login";
import SignUpPage from "../pages/signup/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <OverView />,
      },
      {
        path: "/dashboard/products",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/manage",
        element: <ManageProduct />,
      },
    ],
  },
]);

export default router;
