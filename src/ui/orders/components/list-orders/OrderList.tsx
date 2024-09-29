import { Box, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { EditOrderModal } from "../EditOrderModal";
import { OrdersCards } from "./OrdersCards";
import { OrdersTable } from "./OrdersTable";
import { OrderType } from "@/core/orders/orderTypes";
import { usePersistedOrderStore } from "@/core/orders/usePersistedOrderStore";

type OrderListProps = {
  openSnackbar: (message: string) => void;
};

export const OrderList = ({ openSnackbar }: OrderListProps) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
  const { orders } = usePersistedOrderStore();
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleEditModalOpen = (order: OrderType) => {
    setSelectedOrder(order);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedOrder(null);
    setEditModalOpen(false);
  };

  return (
    <>
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
          <OrdersCards
            orders={orders}
            handleEditModalOpen={handleEditModalOpen}
          />
        ) : (
          <OrdersTable
            orders={orders}
            handleEditModalOpen={handleEditModalOpen}
          />
        )}
      </Box>

      <EditOrderModal
        order={selectedOrder}
        open={isEditModalOpen}
        onModalClose={handleCloseEditModal}
        openSnackbar={openSnackbar}
      />
    </>
  );
};
