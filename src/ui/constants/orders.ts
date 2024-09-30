import { CurrencyType, OrderType } from "@/core/orders/orderTypes";

export const currencies: CurrencyType[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    image: "/bitcoin.png",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    image: "/ethereum.png",
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    image: "/solana.png",
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "BNB",
    image: "/binance.png",
  },
  {
    id: "avalanche-2",
    name: "Avalanche",
    symbol: "AVAX",
    image: "/avalanche.png",
  },
];

export const defaultValues: OrderType = {
  id: "",
  direction: "buy",
  currency: currencies[0],
  quantity: 0,
  expirationDate: "",
  total: 0,
};
