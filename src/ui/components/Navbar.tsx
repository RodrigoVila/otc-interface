import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { BurgerMenu } from "@/ui/components/BurgerMenu";
import { NavButtons } from "@/ui/components/buttons/NavButtons";

export const Navbar = () => {
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  const title = useMemo(() => {
    const TITLES: { [key: string]: string } = {
      "/orders/new": "New Order",
      "/orders": "Orders",
    };
    return TITLES[pathname] || "";
  }, [pathname]);

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        zIndex: 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo isHomePage={isHomePage} />

        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: isHomePage ? "none" : "flex",
          }}
        >
          {/* BurgerMenu will be shown on mobile devices and hidden on tablets and larger */}
          <BurgerMenu />
          {/* NavButtons will be hidden on mobile devices and shown on tablets and larger */}
          <NavButtons />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
