import { SxProps, Theme, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { OrderType } from "@/core/orders/orderTypes";
import { COLORS } from "@/ui/constants/colors";

type DirectionType = OrderType["direction"];

const toggleStyles: SxProps<Theme> | undefined = {
  bgcolor: COLORS.background2,
  color: "#fff",
  paddingY: 2,
  borderBottom: 4,
  fontSize: "1.1rem",
  borderBottomColor: "transparent",
  flexGrow: 1,
  transition: "border-bottom-color 0.3s ease",
  "&.Mui-selected": {
    color: "#fff",
    borderBottomColor: COLORS.accent,
  },
  "&:hover": {
    backgroundColor: "#333",
  },
};

export const DirectionToggleHeader = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="direction"
      control={control}
      defaultValue="buy"
      render={({ field }) => (
        <ToggleButtonGroup
          orientation="vertical"
          value={field.value}
          exclusive
          onChange={(_, newValue: DirectionType) => field.onChange(newValue)}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ToggleButton value="buy" aria-label="buy" sx={toggleStyles}>
            Buy
          </ToggleButton>
          <ToggleButton value="sell" aria-label="sell" sx={toggleStyles}>
            Sell
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    />
  );
};
