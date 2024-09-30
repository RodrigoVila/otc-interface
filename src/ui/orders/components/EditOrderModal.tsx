import { Box, Modal } from "@mui/material";
import { CloseModalButton } from "./CloseModalButton";
import { OrderForm } from "./OrderForm";
import { OrderType } from "@/core/orders/orderTypes";
import { COLORS } from "@/ui/constants/colors";

type EditOrderModalProps = {
  selectedOrder: OrderType | null;
  open: boolean;
  onModalClose: () => void;
  openSnackbar: (message: string) => void;
};

export const EditOrderModal = ({
  selectedOrder,
  open,
  onModalClose,
  openSnackbar,
}: EditOrderModalProps) => {
  return (
    <Modal
      open={open}
      slotProps={{
        backdrop: { sx: { backgroundColor: "rgba(0, 0, 0, 0.95)" } },
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "scroll",
        width: "100%",
        px: {
          xs: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          alignItems: "center",
          bgcolor: COLORS.background,
          width: {
            sx: "100%",
            sm: "max-content",
          },
          height: {
            sx: "100%",
          },
          py: {
            xs: 2,
          },
          px: {
            xs: 2,
          },
          borderRadius: 2,
        }}
      >
        <CloseModalButton onClose={onModalClose} />
        <OrderForm
          existingOrder={selectedOrder}
          openSnackbar={openSnackbar}
          closeEditModal={onModalClose}
        />
      </Box>
    </Modal>
  );
};
