import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "primary.main", padding: "0.5rem" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            textDecoration: "none",
            color: "white",
          }}
        >
          Web3 OTC Platform
        </Typography>
        <Button color="inherit" component={Link} to="/orders">
          Orders
        </Button>
        <Button color="inherit" component={Link} to="/orders/add">
          Create
        </Button>
      </Toolbar>
    </AppBar>
  );
};
