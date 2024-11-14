import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../components/ErrorPage";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"} />,
      },
      {
        path:"/category/:category_id",
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.category_id}`),
        element: <CategoryNews />,
      },
    ]
  },
]);

export default router;
