import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { OrderType } from "@/core/orders/orderTypes";
import { usePersistedOrderStore } from "@/core/orders/usePersistedOrderStore";
import { CustomTooltip } from "@/ui/components/CustomTooltip";
import { COLORS } from "@/ui/constants/colors";
import { defaultValues } from "@/ui/constants/orders";
import {
  CurrenciesDropdown,
  DirectionToggleHeader,
  ExpirationDateInput,
  QuantityInput,
  TotalPrice,
  CreateOrderButton,
} from "@/ui/orders/components/add-order";

type OrderFormType = {
  existingOrder?: OrderType | null;
  openSnackbar: (message: string) => void;
  closeEditModal?: () => void;
};

export const OrderForm = ({
  existingOrder,
  openSnackbar,
  closeEditModal,
}: OrderFormType) => {
  const { addOrder, editOrder } = usePersistedOrderStore();

  const methods = useForm<OrderType>({
    defaultValues: existingOrder || defaultValues,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { handleSubmit, formState, reset: clearInputs } = methods;

  const onSubmit = (data: OrderType) => {
    if (existingOrder) {
      editOrder(existingOrder.id, { ...data, id: existingOrder.id });
      openSnackbar("Order updated");
    } else {
      const order = { ...data, id: crypto.randomUUID() };
      addOrder(order);
      openSnackbar("Order created");
    }

    clearInputs();

    if (closeEditModal) closeEditModal();
  };

  return (
    <FormProvider {...methods}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          width: "100%",
          height: "100%",
          mt: {
            xs: 2,
          },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: existingOrder ? "1.8rem" : "2.5rem",
            lineHeight: existingOrder ? "1rem" : "auto",
          }}
        >
          {existingOrder ? "Edit Order" : "New Order"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            overflow: "hidden",
            width: "100%",
            maxWidth: "550px",
          }}
        >
          <DirectionToggleHeader />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              paddingY: 4,
              paddingX: 3,
              bgcolor: COLORS.background2,
              minWidth: "320px",
              width: "100%",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CurrenciesDropdown />
            <QuantityInput />
            <ExpirationDateInput />
            <TotalPrice />
          </Box>

          {formState.isValid ? (
            <CreateOrderButton>
              {existingOrder ? "Update Order" : undefined}
            </CreateOrderButton>
          ) : (
            <CustomTooltip title="Please complete every input before submitting">
              <CreateOrderButton disabled />
            </CustomTooltip>
          )}
        </Box>
      </Box>
    </FormProvider>
  );
};
