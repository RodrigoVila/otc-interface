import { AppBar, Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        zIndex: 1,
      }}
    >
      <Toolbar>
        <Logo isHomePage={pathname === "/"} />
      </Toolbar>
    </AppBar>
  );
};
