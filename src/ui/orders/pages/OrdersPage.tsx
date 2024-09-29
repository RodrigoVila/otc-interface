import { CheckCircle } from "@mui/icons-material";
import { Alert, Box, Snackbar } from "@mui/material";
import { common, green } from "@mui/material/colors";
import { useState } from "react";
import { usePersistedOrderStore } from "@/core/orders/usePersistedOrderStore";
import { OrderForm } from "@/ui/orders/components/add-order";

export const OrdersPage = () => {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [iSSnackbarOpen, setSnackbarOpen] = useState(false);

  const { orders } = usePersistedOrderStore();

  const handlSnackbarOpen = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handlSnackbarClose = () => {
    setSnackbarMessage("");
    setSnackbarOpen(false);
  };

  console.log("orders", orders);
  return (
    <>
      {/* Page and components */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <OrderForm openSnackbar={handlSnackbarOpen} />
      </Box>

      {/* Notifications */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={iSSnackbarOpen}
        onClose={handlSnackbarClose}
        autoHideDuration={6000}
      >
        <Alert
          onClose={handlSnackbarClose}
          severity="success"
          icon={<CheckCircle fontSize="inherit" sx={{ color: common.white }} />}
          sx={{
            bgcolor: green[600],
            color: "white",
            fontWeight: "500",
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            paddingX: 3,
            paddingY: 1,
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};
