import { CheckCircle } from "@mui/icons-material";
import { Alert, Box, Snackbar } from "@mui/material";
import { common, green } from "@mui/material/colors";
import { useState } from "react";
import { OrderForm } from "@/ui/orders/components/add-order";
import { OrderList } from "@/ui/orders/components/list-orders/";

export const OrdersPage = () => {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [iSSnackbarOpen, setSnackbarOpen] = useState(false);

  const handlSnackbarOpen = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handlSnackbarClose = () => {
    setSnackbarMessage("");
    setSnackbarOpen(false);
  };

  return (
    <>
      {/* Page and components */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          width: "100%",
          height: "100%",
        }}
      >
        <OrderForm openSnackbar={handlSnackbarOpen} />
        <OrderList />
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
