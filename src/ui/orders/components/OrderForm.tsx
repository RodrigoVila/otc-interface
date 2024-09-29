import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { CreateOrderButton } from "./add-order/CreateOrderButton";
import { CurrencyType, OrderType } from "@/core/orders/orderTypes";
import { usePersistedOrderStore } from "@/core/orders/usePersistedOrderStore";
import { CustomTooltip } from "@/ui/components/CustomTooltip";
import { COLORS } from "@/ui/constants/colors";
import {
  CurrenciesDropdown,
  DirectionToggleHeader,
  ExpirationDateInput,
  QuantityInput,
  TotalPrice,
} from "@/ui/orders/components/add-order";

type OrderFormType = {
  existingOrder?: OrderType | null;
  openSnackbar: (message: string) => void;
  closeEditModal?: () => void;
};

const currencies: CurrencyType[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    image: "/bitcoin.png",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    image: "/ethereum.png",
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    image: "/solana.png",
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "BNB",
    image: "/binance.png",
  },
  {
    id: "avalanche-2",
    name: "Avalanche",
    symbol: "AVAX",
    image: "/avalanche.png",
  },
];

const defaultValues: OrderType = {
  id: "",
  direction: "buy",
  currency: currencies[0],
  quantity: 0,
  expirationDate: "",
  total: 0,
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
      closeEditModal();
    } else {
      const order = { ...data, id: crypto.randomUUID() };
      addOrder(order);
      openSnackbar("Order created");
    }
    clearInputs();
  };

  return (
    <FormProvider {...methods}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "2.5rem" }}>
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
            <CurrenciesDropdown currencies={currencies} />
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
