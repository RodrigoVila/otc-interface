export const fetchCoinUSDPrice = async (coinId: string) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&x_cg_demo_api_key=${
      import.meta.env.VITE_COINGECKO_API
    }`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch price for ${coinId}`);
  }

  const data = await response.json();
  return data[coinId].usd;
};
