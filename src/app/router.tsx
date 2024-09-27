import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/ui/components/Layout";
import { HomePage } from "@/ui/home/pages/HomePage";
import { AddOrder } from "@/ui/orders/pages/AddOrder";

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
        children: [
          {
            path: "",
            element: <>Order List</>,
          },
          {
            path: ":orderId",
            element: <>Single Order</>,
          },
          {
            path: "add",
            element: <AddOrder />,
          },
        ],
      },
    ],
  },
]);
