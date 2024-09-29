import { Box, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { useGetUSDPrice } from "@/adapters/hooks/useGetUSDPrice";
import { COLORS } from "@/ui/constants/colors";
import { formatUSDPrice } from "@/ui/utils/formatPrice";

export const TotalPrice = () => {
  const { watch, setValue } = useFormContext();

  const currency = watch("currency");
  const quantity = watch("quantity");

  const { usdPrice } = useGetUSDPrice(currency.id);

  const total = useMemo(() => {
    if (!usdPrice || !quantity || quantity <= 0 || quantity > 999) return 0;

    return usdPrice * quantity;
  }, [usdPrice, quantity]);

  useEffect(() => {
    if (!total) return;
    setValue("total", total);
  }, [total, setValue]);

  return (
    <Box
      sx={{
        backgroundColor: COLORS.background2,
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: COLORS.primary, fontSize: "1.2rem", fontWeight: "bold" }}
      >
        Total:
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: "bold",
        }}
      >
        {formatUSDPrice(total)}
      </Typography>
    </Box>
  );
};
