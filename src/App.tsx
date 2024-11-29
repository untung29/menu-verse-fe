import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import MenuTabs from "./components/MenuTabs";

function App() {
  const theme = createTheme({
    breakpoints: {
      xs: "480",
      sm: "768",
      md: "992",
      lg: "1200",
    },
    fontFamily: "'Courier New', Courier, monospace",
  });

  return (
    <MantineProvider theme={theme}>
      <MenuTabs />
    </MantineProvider>
  );
}

export default App;
