export type Order = {
  id: string;
  direction: "buy" | "sell";
  cryptocurrency: string;
  quantity: number;
  value: number;
  expirationDate: string;
};

export type OrderState = {
  orders: Order[];
  addOrder: (order: Order) => void;
  editOrder: (id: string, updatedOrder: Order) => void;
  deleteOrder: (id: string) => void;
};
