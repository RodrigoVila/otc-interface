import { Box } from "@mui/material";
import { ListOrdersButton } from "./ListOrdersButton";
import { AddOrderButton } from "@/ui/components/AddOrderButton";

export const NavButtons = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        gap: 2,
      }}
    >
      <ListOrdersButton />
      <AddOrderButton />
    </Box>
  );
};
