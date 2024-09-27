import { Button, ButtonProps } from "@mui/material";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "@/ui/constants/colors";

type AddOrderButtonProps = ButtonProps & PropsWithChildren;

export const AddOrderButton = ({
  sx,
  children,
  ...props
}: AddOrderButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/orders/new")}
      color="inherit"
      sx={{
        "&:hover": {
          backgroundColor: COLORS.hover.background,
        },
        ...sx,
      }}
      {...props}
    >
      {children ?? "New Order"}
    </Button>
  );
};
