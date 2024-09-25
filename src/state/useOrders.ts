import { create } from "zustand";
import { OrderState } from "@/types/orders";

export const useOrders = create<OrderState>((set) => ({
  orders: [],
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
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
}));
