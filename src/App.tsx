import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import MenuTabs from "./components/MenuTabs";
import { useQuery } from "@apollo/client";
import { GET_MENUS } from "./graphql/queries/menuQueries";
import { GetMenuResponse } from "./components/MenuTabs/types";

function App() {
  const { loading, error, data } = useQuery<GetMenuResponse>(GET_MENUS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.menus.length)
    return (
      <p>Menu is not available at the moment, please try again next time</p>
    );

  const theme = createTheme({
    breakpoints: {
      xs: "480",
      sm: "768",
      md: "992",
      lg: "1200",
    },
  });

  return (
    <MantineProvider theme={theme}>
      <MenuTabs menus={data.menus} />
    </MantineProvider>
  );
}

export default App;
