import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
// import { useQuery } from "@apollo/client";
// import { GET_MENUS } from "./graphql/queries/menuQueries";
// import { useDisclosure } from "@mantine/hooks";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import routes from "./utils/routes";

// interface GetMenuResponse {
//   menus: Array<{
//     endDate?: string;
//     id: string;
//     label: string;
//     sections: Array<{ id: string; label: string }>;
//   }>;
// }

function App() {
  // const navigate = useNavigate();

  // const { loading, error } = useQuery<GetMenuResponse>(GET_MENUS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  const theme = createTheme({
    breakpoints: {
      xs: "480",
      sm: "768",
      md: "992",
      lg: "1200",
    },
  });

  return <MantineProvider theme={theme}>Untung</MantineProvider>;
}

export default App;
