import { Box } from "@mui/material";
import { AddOrderButton, ListOrdersButton } from "@/ui/components/buttons";

export const NavButtons = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <ListOrdersButton />
      <AddOrderButton />
    </Box>
  );
};
