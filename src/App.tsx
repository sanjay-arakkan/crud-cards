import { Divider, Stack, ThemeProvider, Typography } from "@mui/material";
import CardsLayout from "./components/cards-layout/CardsLayout";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Typography variant="h2" textAlign="center" mb={1} fontWeight={500}>
          Crud Cards
        </Typography>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Typography variant="h4">Cards</Typography>
        <CardsLayout />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
