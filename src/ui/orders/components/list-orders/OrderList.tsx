import { Box, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { OrderType } from "@/core/orders/orderTypes";
import { usePersistedOrderStore } from "@/core/orders/usePersistedOrderStore";
import { DeleteOrderModal } from "@/ui/orders/components/DeleteOrderModal";
import { EditOrderModal } from "@/ui/orders/components/EditOrderModal";
import { OrdersCards } from "@/ui/orders/components/list-orders/OrdersCards";
import { OrdersTable } from "@/ui/orders/components/list-orders/OrdersTable";

type OrderListProps = {
  openSnackbar: (message: string) => void;
};

export const OrderList = ({ openSnackbar }: OrderListProps) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModaLOpen, setDeleteModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
  const { orders } = usePersistedOrderStore();
  const isMobile = useMediaQuery("(max-width:768px)");

  const clearOrder = () => {
    setSelectedOrder(null);
  };

  const handleEditModalOpen = (order: OrderType) => {
    setSelectedOrder(order);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    clearOrder();
    setEditModalOpen(false);
  };

  const handleDeleteModalOpen = (order: OrderType) => {
    setSelectedOrder(order);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    clearOrder();
    setDeleteModalOpen(false);
  };

  if (!orders.length) return null;

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
            handleDeleteModalOpen={handleDeleteModalOpen}
          />
        ) : (
          <OrdersTable
            orders={orders}
            handleEditModalOpen={handleEditModalOpen}
            handleDeleteModalOpen={handleDeleteModalOpen}
          />
        )}
      </Box>

      <EditOrderModal
        selectedOrder={selectedOrder}
        open={isEditModalOpen}
        onModalClose={handleCloseEditModal}
        openSnackbar={openSnackbar}
      />

      <DeleteOrderModal
        selectedOrder={selectedOrder}
        open={isDeleteModaLOpen}
        onModalClose={handleCloseDeleteModal}
        openSnackbar={openSnackbar}
      />
    </>
  );
};
