import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/ui/components/Layout";
import { HomePage } from "@/ui/home/pages/HomePage";
import { OrdersPage } from "@/ui/orders/pages/OrdersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
    ],
  },
]);
