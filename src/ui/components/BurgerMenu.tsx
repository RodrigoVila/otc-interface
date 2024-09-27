import { Menu as MenuIcon } from "@mui/icons-material";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
import { AddOrderButton } from "./AddOrderButton";
import { ListOrdersButton } from "./ListOrdersButton";

export const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuOpen}
        sx={{ padding: 0 }}
      >
        <MenuIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose} sx={{ padding: 1 }}>
          <AddOrderButton sx={{ paddingX: 3 }} />
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          sx={{
            padding: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ListOrdersButton />
        </MenuItem>
      </Menu>
    </Box>
  );
};
