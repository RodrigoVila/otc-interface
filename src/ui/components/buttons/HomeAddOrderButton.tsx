import { Box } from "@mui/material";
import { common } from "@mui/material/colors";
import { AddOrderButton } from "./AddOrderButton";

export const HomeAddOrderButton = () => {
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        background: "linear-gradient(45deg, #8A2BE2, #9932CC, #BA55D3)",
        padding: "2px",
      }}
    >
      <AddOrderButton
        sx={{
          bgcolor: common.black,
          color: common.white,
          "&:hover": {
            bgcolor: "transparent",
          },
          borderRadius: 0,
          fontSize: {
            xs: "0.9rem",
            sm: " 1.4rem",
            md: "1rem",
          },
          padding: {
            xs: "12px 25px",
            sm: "20px 30px",
            md: "12px 25px",
          },
        }}
      >
        Create Your First Order
      </AddOrderButton>
    </Box>
  );
};
