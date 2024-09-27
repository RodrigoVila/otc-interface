import { Box } from "@mui/material";

export const DarkOverlay = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
      }}
    />
  );
};
