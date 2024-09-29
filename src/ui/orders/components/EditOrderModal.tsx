import { CloseSharp } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";
import { OrderForm } from "./OrderForm";
import { OrderType } from "@/core/orders/orderTypes";
import { COLORS } from "@/ui/constants/colors";

type EditOrderModalProps = {
  order: OrderType | null;
  open: boolean;
  onModalClose: () => void;
  openSnackbar: (message: string) => void;
};

export const EditOrderModal = ({
  order,
  open,
  onModalClose,
  openSnackbar,
}: EditOrderModalProps) => {
  return (
    <Modal
      open={open}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          bgcolor: COLORS.background,
          px: 4,
          py: 8,
          borderRadius: 2,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onModalClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseSharp sx={{ color: COLORS.primary, height: 40, width: 40 }} />
        </IconButton>
        <OrderForm
          existingOrder={order}
          openSnackbar={openSnackbar}
          closeEditModal={onModalClose}
        />
      </Box>
    </Modal>
  );
};
