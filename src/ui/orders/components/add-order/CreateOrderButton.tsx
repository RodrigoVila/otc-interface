import { Button } from "@mui/material";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { COLORS } from "@/ui/constants/colors";

type CreateOrderButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
};

export const CreateOrderButton = ({
  children,
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
      {children ?? `Create ${direction === "buy" ? "buying" : "selling"} order`}
    </Button>
  );
};
