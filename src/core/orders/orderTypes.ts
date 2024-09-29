export type CurrencyType = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  currentPrice?: number;
};

export type OrderType = {
  id: string;
  direction: "buy" | "sell";
  currency: CurrencyType;
  expirationDate: string;
  quantity: number;
  total: number;
};

export type OrderState = {
  orders: OrderType[];
  addOrder: (order: OrderType) => void;
  editOrder: (id: string, updatedOrder: OrderType) => void;
  deleteOrder: (id: string) => void;
};
