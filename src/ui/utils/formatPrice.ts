export const formatUSDPrice = (usdPrice?: number) => {
  if (!usdPrice) return "$0.00";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(usdPrice);
};
