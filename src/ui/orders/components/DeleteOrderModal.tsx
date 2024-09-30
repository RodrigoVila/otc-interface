import { Box, Button, Modal, Typography, SxProps, Theme } from "@mui/material";
import { red } from "@mui/material/colors";
import { CloseModalButton } from "./CloseModalButton";
import { OrderCard } from "./OrderCard";
import { OrderType } from "@/core/orders/orderTypes";
import { usePersistedOrderStore } from "@/core/orders/usePersistedOrderStore";
import { COLORS } from "@/ui/constants/colors";

type DeleteOrderModalProps = {
  selectedOrder: OrderType | null;
  open: boolean;
  onModalClose: () => void;
  openSnackbar: (message: string) => void;
};

const buttonStyles: SxProps<Theme> = {
  flexGrow: 1,
  py: 2,
  borderRadius: 0,
};

export const DeleteOrderModal = ({
  selectedOrder,
  open,
  onModalClose,
  openSnackbar,
}: DeleteOrderModalProps) => {
  const { deleteOrder } = usePersistedOrderStore();

  const handleConfirmDelete = () => {
    if (!selectedOrder) return;

    deleteOrder(selectedOrder.id);
    openSnackbar("Order deleted");
    onModalClose();
  };

  return (
    <Modal
      open={open}
      slotProps={{
        backdrop: { sx: { backgroundColor: "rgba(0, 0, 0, 0.8)" } },
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginX: 2,
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          overflow: "hidden",
          bgcolor: COLORS.background,
          pt: 4,
          borderRadius: 4,
          width: "100%",
          maxWidth: "450px",
        }}
      >
        <CloseModalButton onClose={onModalClose} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            px: 2,
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", fontSize: "1.8rem" }}
          >
            Delete Order?
          </Typography>

          <OrderCard order={selectedOrder} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={handleConfirmDelete}
            sx={{
              ...buttonStyles,
              bgcolor: red[600],
              "&:hover": {
                bgcolor: red[900],
              },
            }}
          >
            Delete
          </Button>
          <Button
            onClick={onModalClose}
            sx={{
              ...buttonStyles,
              borderTop: 1,
              borderTopColor: COLORS.primary,
              color: COLORS.primary,
              "&:hover": {
                backgroundColor: COLORS.primary,
                color: COLORS.background,
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
