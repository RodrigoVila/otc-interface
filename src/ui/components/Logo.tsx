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
        gap: 1,
        textDecoration: "none",
        "&:focus, &:active": {
          outline: "none",
          textDecoration: "none",
        },
      }}
    >
      <Box sx={{ height: { xs: 40, md: 30 } }}>
        <img
          src="https://membranelabs.com/wp-content/uploads/2023/06/Membrane-icon-9-Jun-2023.svg"
          alt="Membrane Labs logo"
          style={{ height: "100%" }}
        />
      </Box>

      <Typography
        variant="h6"
        sx={{
          display: {
            xs: "none",
            md: isHomePage ? "none" : "flex",
          },
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
        Membrane OTC
      </Typography>
    </Box>
  );
};
