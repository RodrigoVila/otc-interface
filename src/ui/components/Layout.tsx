import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ flexGrow: 1, marginTop: "2rem" }}>
        <Outlet />
      </Container>

      <Footer />
    </Box>
  );
};
