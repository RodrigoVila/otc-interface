import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OrderState } from "@/core/orders/orderTypes";

export const usePersistedOrderStore = create(
  persist<OrderState>(
    (set) => ({
      orders: [],
      addOrder: (order) =>
        set((state) => ({ orders: [...state.orders, order] })),
      editOrder: (id, updatedOrder) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === id ? updatedOrder : order
          ),
        })),
      deleteOrder: (id) =>
        set((state) => ({
          orders: state.orders.filter((order) => order.id !== id),
        })),
    }),
    {
      name: "membrane-order-storage",
    }
  )
);
