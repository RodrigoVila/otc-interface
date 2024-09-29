import { Button } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { COLORS } from "@/ui/constants/colors";

type CreateOrderButtonProps = {
  disabled?: boolean;
};

export const CreateOrderButton = ({
  disabled = false,
}: CreateOrderButtonProps) => {
  const { watch } = useFormContext();

  const direction = watch("direction");

  return (
    <Button
      type="submit"
      variant="contained"
      disabled={disabled}
      sx={{
        bgcolor: COLORS.accent2,
        "&:hover": {
          bgcolor: COLORS.accent,
        },
        "&:disabled": {
          bgcolor: COLORS.disabled,
          color: COLORS.secondary,
        },
        paddingY: 2,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        fontSize: "1rem",
        width: "100%",
      }}
    >
      {`Create ${direction === "buy" ? "buying" : "selling"} order`}
    </Button>
  );
};
