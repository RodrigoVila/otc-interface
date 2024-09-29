import { Box, Typography, useMediaQuery } from "@mui/material";
import { OrdersCards } from "./OrdersCards";
import { OrdersTable } from "./OrdersTable";
import { usePersistedOrderStore } from "@/core/orders/usePersistedOrderStore";

export const OrderList = () => {
  const { orders } = usePersistedOrderStore();
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 2,
        width: "100%",
      }}
    >
      <Typography sx={{ textAlign: "center", fontSize: "2.5rem" }}>
        Order List
      </Typography>
      {isMobile ? (
        <OrdersCards orders={orders} />
      ) : (
        <OrdersTable orders={orders} />
      )}
    </Box>
  );
};
