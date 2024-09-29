import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "transparent",
        padding: "1rem",
      }}
    >
      <Typography variant="body2" align="center">
        © 2024. All rights reserved.
      </Typography>
    </Box>
  );
};
