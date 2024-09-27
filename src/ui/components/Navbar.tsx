import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import { NavButtons } from "./NavButtons";

export const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Box>
          <img
            src="https://membranelabs.com/wp-content/uploads/2023/06/Membrane-icon-9-Jun-2023.svg"
            alt="Membrane Labs logo"
            style={{ height: 15 }}
          />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              flexGrow: 1,
              color: "white",
              textDecoration: "none",
              fontSize: {
                xs: "0.9rem",
                md: "1rem",
              },
              fontWeight: "bold",
            }}
          >
            Membrane OTC
          </Typography>
        </Box>
        <Typography>Add Order</Typography>

        <Box>
          {/* BurgerMenu will be shown on mobile devices and hidden on tablets and larger */}
          <BurgerMenu />
          {/* NavButtons will be hidden on mobile devices and shown on tablets and larger */}
          <NavButtons />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
