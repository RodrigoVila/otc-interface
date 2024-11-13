import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = ({ isHomePage }: { isHomePage: boolean }) => {
  return (
    <Box
      component={isHomePage ? "div" : Link}
      to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        textDecoration: "none",
        "&:focus, &:active": {
          outline: "none",
          textDecoration: "none",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          display: isHomePage ? "none" : "flex",
          flexGrow: 1,
          color: "white",
          fontSize: {
            xs: "0.9rem",
            md: "1rem",
          },
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        OTC
      </Typography>
    </Box>
  );
};
