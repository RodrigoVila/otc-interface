import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";

const blurAnimation = keyframes`
  0% {
    backdrop-filter: blur(2px);
  }
  50% {
    backdrop-filter: blur(10px);
  }
  100% {
    backdrop-filter: blur(2px);
  }
`;

export const AnimatedOverlay = () => {
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
        animation: `${blurAnimation} 6s ease-in-out infinite`,
      }}
    />
  );
};
