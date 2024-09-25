import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AddOrderSection } from "@/features/orders/pages/AddOrderSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <>Home</>,
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
            element: <AddOrderSection />,
          },
        ],
      },
    ],
  },
]);
