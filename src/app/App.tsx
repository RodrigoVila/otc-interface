import { createTheme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { COLORS } from "@/ui/constants/colors";

const theme = createTheme({
  palette: {
    background: {
      default: COLORS.background,
    },
    text: {
      primary: COLORS.primary,
      secondary: COLORS.secondary,
      disabled: COLORS.disabled,
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.background,
          color: COLORS.primary,
        },
      },
    },
  },
});

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
