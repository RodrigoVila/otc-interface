import { Box, Fade, Tooltip } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { CreateOrderButton } from "./CreateOrderButton";
import { CurrencyType, OrderType } from "@/core/orders/orderTypes";
import { usePersistedOrderStore } from "@/core/orders/usePersistedOrderStore";
import { COLORS } from "@/ui/constants/colors";
import {
  CurrenciesDropdown,
  DirectionToggleHeader,
  ExpirationDateInput,
  QuantityInput,
  TotalPrice,
} from "@/ui/orders/components/add-order";

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
  openSnackbar,
}: {
  openSnackbar: (message: string) => void;
}) => {
  const { addOrder } = usePersistedOrderStore();

  const methods = useForm<OrderType>({
    defaultValues,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { handleSubmit, formState, reset: clearInputs } = methods;

  const onSubmit = (data: OrderType) => {
    const order = { ...data, id: crypto.randomUUID() };

    addOrder(order);
    openSnackbar("Order created");
    clearInputs();
  };

  return (
    <FormProvider {...methods}>
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
          <CreateOrderButton />
        ) : (
          <Tooltip
            title="Please complete every input before submitting"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            followCursor
            PopperProps={{
              sx: {
                "& .MuiTooltip-tooltip": {
                  fontSize: "1rem",
                  padding: "10px",
                  textAlign: "center",
                },
              },
            }}
          >
            <span>
              <CreateOrderButton disabled />
            </span>
          </Tooltip>
        )}
      </Box>
    </FormProvider>
  );
};
