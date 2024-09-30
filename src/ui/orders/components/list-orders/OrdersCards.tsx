import { Box } from "@mui/material";
import { ActionsMenu } from "../ActionsMenu";
import { OrderCard } from "../OrderCard";
import { OrderType } from "@/core/orders/orderTypes";

type OrdersCardsProps = {
  orders: OrderType[];
  handleEditModalOpen: (order: OrderType) => void;
  handleDeleteModalOpen: (order: OrderType) => void;
};

export const OrdersCards = ({
  orders,
  handleEditModalOpen,
  handleDeleteModalOpen,
}: OrdersCardsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgColor: "#EC0000",
        width: "100%",
        maxWidth: "500px",
      }}
    >
      {orders.map((order) => (
        <OrderCard
          order={order}
          actionsMenu={
            <ActionsMenu
              onEditClick={() => handleEditModalOpen(order)}
              onDeleteClick={() => handleDeleteModalOpen(order)}
            />
          }
        />
      ))}
    </Box>
  );
};
