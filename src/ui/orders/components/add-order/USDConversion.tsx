import { Typography, Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useGetUSDPrice } from "@/adapters/hooks/useGetUSDPrice";
import { COLORS } from "@/ui/constants/colors";
import { formatUSDPrice } from "@/ui/utils/formatPrice";

export const USDConversion = () => {
  const { watch, setValue } = useFormContext();

  const currency = watch("currency");

  const { usdPrice, isLoading, error } = useGetUSDPrice(currency.id);

  useEffect(() => {
    if (!usdPrice) return;

    setValue("currency", { ...currency, currentPrice: usdPrice });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usdPrice]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          gap: 1,
        }}
      >
        <CircularProgress size={24} />
        <Typography sx={{ fontSize: "0.9rem" }}>
          Fetching USD value...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Typography
        sx={{ textAlign: "end", color: "#EC0000" }}
      >{`Fetching error: ${error.message}`}</Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        marginTop: 1,
        color: COLORS.secondary,
      }}
    >
      {usdPrice ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: "1rem",
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "innherit" }}>
            Current Price:
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", fontSize: "inherit" }}
          >
            {formatUSDPrice(usdPrice)}
          </Typography>
        </Box>
      ) : (
        <Typography variant="body2">Price unavailable</Typography>
      )}
    </Box>
  );
};
