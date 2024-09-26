import { useQuery } from "@tanstack/react-query";
import { fetchCoinUSDPrice } from "@/adapters/services/CoinGecko.service";

export const useGetUSDPrice = (currencyId: string) => {
  const { data: usdPrice, ...rest } = useQuery<number>({
    queryKey: ["getCoinUSDPrice", currencyId],
    queryFn: () => fetchCoinUSDPrice(currencyId),
    enabled: !!currencyId,
  });

  return { usdPrice, ...rest };
};
