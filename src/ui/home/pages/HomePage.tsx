import { Box, Typography } from "@mui/material";
import { HomeAddOrderButton } from "@/ui/components/buttons";
import { COLORS } from "@/ui/constants/colors";
import { DarkOverlay } from "@/ui/home/components/DarkOverlay";

export const HomePage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
        position: "absolute",
        inset: 0,
      }}
    >
      <img
        src="/bg.jpg"
        alt="Background"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <DarkOverlay />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 1, sm: 3 },
          color: COLORS.primary,
          textAlign: "center",
          padding: 2,
          height: "100%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "revert",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
            fontWeight: "bold",
            zIndex: 1,
          }}
        >
          Membrane OTC
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: "1.25rem",
              sm: "1.5rem",
              md: "2rem",
            },
            zIndex: 1,
          }}
        >
          A decentralized hub for secure Over-The-Counter trading
        </Typography>

        <HomeAddOrderButton sx={{ mt: 1 }} />
      </Box>
    </Box>
  );
};
