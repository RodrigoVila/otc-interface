import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

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
