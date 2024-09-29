import { Control, FieldValues } from "react-hook-form";

export type CurrencyType = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  currentPrice?: number;
};

export type Order = {
  id: string;
  direction: "buy" | "sell";
  currency: CurrencyType;
  expirationDate: string;
  quantity: number;
  total: number;
};

export type OrderState = {
  orders: Order[];
  addOrder: (order: Order) => void;
  editOrder: (id: string, updatedOrder: Order) => void;
  deleteOrder: (id: string) => void;
};

export type PropsWithFormControl = {
  control: Control<FieldValues, string>;
};
