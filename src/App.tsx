import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

function App() {
  const theme = createTheme({});

  return <MantineProvider theme={theme}>Untung</MantineProvider>;
}

export default App;
