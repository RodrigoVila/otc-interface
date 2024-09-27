import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { COLORS } from "@/ui/constants/colors";

export const ListOrdersButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/orders")}
      color="inherit"
      sx={{
        "&:hover": {
          backgroundColor: COLORS.hover.background,
        },
      }}
    >
      Order List
    </Button>
  );
};
