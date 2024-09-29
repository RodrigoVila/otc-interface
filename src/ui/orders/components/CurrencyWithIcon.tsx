import { Box, Typography } from "@mui/material";
import { OrderType } from "@/core/orders/orderTypes";

type CurrencyWithIconProps = Pick<OrderType["currency"], "image" | "name"> & {
  symbol?: OrderType["currency"]["symbol"];
};

export const CurrencyWithIcon = ({
  name,
  image,
  symbol,
}: CurrencyWithIconProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        marginRight: 2,
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: 30, height: 30, marginRight: 5 }}
      />
      <Typography variant="body1" component="p" sx={{ fontWeight: "600" }}>
        {`${name} ${symbol ? `(${symbol})` : ""}`}
      </Typography>
    </Box>
  );
};
