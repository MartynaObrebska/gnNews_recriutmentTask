import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import SideMenu from "./components/SideMenu/SideMenu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a3cf34",
    },
    secondary: {
      main: "#545454",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12} sx={{ height: "84px" }}>
          <Header />
        </Grid>
        <Grid item xs={3}>
          <SideMenu />
        </Grid>
        <Grid item xs={9}>
          <MainContent />
        </Grid>
        <Grid item xs={12} sx={{ height: "84px" }}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
