import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import { Grid, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Header />
        <SideMenu />
        <RouterProvider router={router} />
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
